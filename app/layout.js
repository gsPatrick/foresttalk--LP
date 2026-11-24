import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { SITE, SITE_URL } from "@/lib/site";

const display = Baloo_2({ subsets: ["latin"], weight: ["700", "800"], variable: "--f-display", display: "swap" });
const body = Nunito({ subsets: ["latin"], variable: "--f-body", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.title,
  description: SITE.description,
  openGraph: { title: SITE.title, description: SITE.description, type: "website", locale: "pt_BR", siteName: "Forest Talk" },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  icons: { icon: "/images/icone.png", apple: "/images/icone.png" },
};

export const viewport = { themeColor: "#3aa9f5", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "MobileApplication", name: "Forest Talk", description: SITE.description,
            applicationCategory: "EducationalApplication", operatingSystem: "iOS, Android", inLanguage: "pt-BR",
            offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" }, url: SITE_URL,
          }) }}
        />
      </body>
    </html>
  );
}
