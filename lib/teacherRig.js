// Professor 3D animado por código (respira, pisca, olha, fala, ouve).
// Adaptado do visualizador do app: os eixos dos ossos foram calibrados no Blender.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const TARGET_H = 2.0;
const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, "_").replace(/[.\[\]:/]/g, "");
const AX = { x: new THREE.Vector3(1, 0, 0), y: new THREE.Vector3(0, 1, 0), z: new THREE.Vector3(0, 0, 1) };
const CFG = { breathe: "x", jaw: "x", jawAmt: 0.3, head: "y", headX: "x", headZ: "z", lid: "x", lidAmt: 0.5, brow: "x", armOut: 0.12, foreFwd: 0.15 };

export function createTeacher(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 50);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 1.6));
  const key = new THREE.DirectionalLight(0xffffff, 2.0); key.position.set(2, 3, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(0xbfe8ff, 0.8); rim.position.set(-3, 2, -2); scene.add(rim);

  const q = new THREE.Quaternion(), q1 = new THREE.Quaternion(), q2 = new THREE.Quaternion();
  const p1 = new THREE.Vector3(), p2 = new THREE.Vector3(), v = new THREE.Vector3();
  const state = { speaking: false, listening: false, phase: Math.random() * 6, blinkAt: 2.5, blinkT: -1, mouth: 0 };
  let model = null, raf = 0, visible = true, running = true;
  const clock = new THREE.Clock();
  let last = 0;

  const rot = (name, axis, ang) => {
    const n = norm(name), b = model.bones[n]; if (!b) return;
    q.setFromAxisAngle(AX[axis], ang); b.quaternion.copy(model.rest[n]).multiply(q);
  };
  const aim = (boneName, childName, dir) => {
    const b = model.bones[norm(boneName)], c = model.bones[norm(childName)]; if (!b || !c || !b.parent) return;
    b.updateWorldMatrix(true, false); c.updateWorldMatrix(true, false);
    p1.setFromMatrixPosition(b.matrixWorld); p2.setFromMatrixPosition(c.matrixWorld);
    const d = p2.sub(p1).normalize();
    q1.setFromUnitVectors(d, dir); b.getWorldQuaternion(q2);
    const world = q1.multiply(q2); b.parent.getWorldQuaternion(q2);
    b.quaternion.copy(q2.invert().multiply(world)); b.updateMatrixWorld(true);
  };

  function applyPose(t) {
    for (const n in model.bones) model.bones[n].quaternion.copy(model.rest[n]);
    model.root.updateMatrixWorld(true);
    const hip = model.bones.hips ? v.setFromMatrixPosition(model.bones.hips.matrixWorld).clone() : new THREE.Vector3();
    const p = t + state.phase;
    for (const side of ["l", "r"]) {
      const ub = model.bones["upperarm" + side]; if (!ub) continue;
      const out = Math.sign(p1.setFromMatrixPosition(ub.matrixWorld).x - hip.x) || 1;
      // braços para baixo; ao falar, um deles gesticula de leve
      const wave = state.speaking && side === "r" ? Math.sin(p * 3) * 0.12 : 0;
      aim("upperarm" + side, "forearm" + side, new THREE.Vector3(out * (CFG.armOut + wave), -1, 0.05 + (state.speaking && side === "r" ? 0.25 + wave : 0)).normalize());
      aim("forearm" + side, "hand" + side, new THREE.Vector3(out * CFG.armOut * 0.5, -1, CFG.foreFwd + (state.speaking && side === "r" ? 0.5 : 0)).normalize());
    }
    rot("chest", CFG.breathe, Math.sin(p * 1.8) * 0.025);
    rot("spine", CFG.breathe, Math.sin(p * 1.8 + 0.4) * 0.015);
    let nod = Math.sin(p * 1.2) * 0.03, turn = Math.sin(p * 0.5) * 0.06, tilt = 0;
    if (state.listening) { tilt = 0.12; nod += 0.03; }
    if (state.speaking) { turn += Math.sin(p * 2.2) * 0.07; nod += Math.sin(p * 3.1) * 0.025; }
    rot("head", CFG.headX, nod); rot("neck", CFG.head, turn * 0.4);
    const hb = model.bones.head;
    if (hb) hb.quaternion.multiply(q.setFromAxisAngle(AX[CFG.head], turn * 0.6)).multiply(q.setFromAxisAngle(AX[CFG.headZ], tilt));
    const target = state.speaking ? Math.abs(Math.sin(p * 9)) * Math.abs(Math.sin(p * 3.1 + 1)) : 0;
    state.mouth += (target - state.mouth) * 0.35;
    rot("mandibula", CFG.jaw, state.mouth * CFG.jawAmt);
    let lid = 0;
    if (state.blinkT >= 0) { const k = state.blinkT / 0.16; lid = k < 1 ? Math.sin(k * Math.PI) : 0; if (k >= 1) state.blinkT = -1; }
    rot("palpebra.L", CFG.lid, lid * CFG.lidAmt); rot("palpebra.R", CFG.lid, lid * CFG.lidAmt);
    const brow = (state.listening ? 0.08 : 0) + (state.speaking ? Math.sin(p * 2.2) * 0.04 : 0);
    for (const s of [".L", ".R"]) for (const k of ["ext", "int", "meio"]) rot("sobrancelha " + k + s, CFG.brow, brow);
  }

  function loop() {
    raf = requestAnimationFrame(loop);
    if (!model || !visible || !running) return;
    const t = clock.getElapsedTime(), dt = Math.min(t - last, 0.1); last = t;
    if (state.blinkT < 0 && t > state.blinkAt) { state.blinkT = 0; state.blinkAt = t + 2.2 + Math.random() * 3; }
    else if (state.blinkT >= 0) state.blinkT += dt;
    applyPose(t);
    renderer.render(scene, camera);
  }

  function resize() {
    const w = canvas.clientWidth || 300, h = canvas.clientHeight || 400;
    renderer.setSize(w, h, false); camera.aspect = w / Math.max(h, 1); camera.updateProjectionMatrix();
  }
  function frame() {
    const target = new THREE.Vector3(0, TARGET_H * 0.5, 0);
    const dist = (TARGET_H * 1.1 / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.position.set(0, target.y + 0.1, dist); camera.lookAt(target);
  }

  const ro = new ResizeObserver(() => { resize(); frame(); });
  ro.observe(canvas);

  return {
    load(url) {
      return new Promise((resolve, reject) => {
        new GLTFLoader().load(url, (gltf) => {
          const root = gltf.scene;
          root.traverse((o) => { if (o.isMesh) { o.frustumCulled = false; if (o.material) { o.material.roughness = Math.max(o.material.roughness ?? 0.8, 0.7); o.material.metalness = 0; } } });
          const wrap = new THREE.Group(); wrap.add(root); wrap.updateMatrixWorld(true);
          const box = new THREE.Box3().setFromObject(root, true);
          root.scale.multiplyScalar(TARGET_H / Math.max(box.getSize(new THREE.Vector3()).y, 1e-3)); wrap.updateMatrixWorld(true);
          const b2 = new THREE.Box3().setFromObject(root, true);
          root.position.y -= b2.min.y; const c = b2.getCenter(new THREE.Vector3()); root.position.x -= c.x; root.position.z -= c.z;
          const bones = {}, rest = {};
          root.traverse((o) => { if (o.isBone) { bones[norm(o.name)] = o; rest[norm(o.name)] = o.quaternion.clone(); } });
          model = { wrap, root, bones, rest }; scene.add(wrap);
          resize(); frame(); loop();
          resolve(true);
        }, undefined, reject);
      });
    },
    setSpeaking(on) { state.speaking = !!on; },
    setListening(on) { state.listening = !!on; },
    setVisible(on) { visible = on; },
    setRunning(on) { running = on; if (model && !on) { applyPose(0); renderer.render(scene, camera); } },
    dispose() { cancelAnimationFrame(raf); ro.disconnect(); renderer.dispose(); },
  };
}
