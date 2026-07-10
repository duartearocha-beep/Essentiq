import type { Metadata, Viewport } from "next";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.essentiq.pt"),

  title: {
    default: "Essentiq | Aromatização Profissional de Espaços",
    template: "%s | Essentiq",
  },

  description:
    "A Essentiq cria experiências memoráveis através da aromatização profissional de bares, discotecas, eventos, hotéis, ginásios, lojas, restaurantes e outros espaços comerciais.",

  keywords: [
    "Essentiq",
    "aromatização de espaços",
    "aromatização profissional",
    "fragrância ambiente",
    "marketing olfativo",
    "marketing sensorial",
    "identidade olfativa",
    "perfume para empresas",
    "aromatização para bares",
    "aromatização para discotecas",
    "aromatização para eventos",
    "aromatização para hotéis",
    "aromatização para ginásios",
    "fragrâncias para lojas",
    "fragrâncias para restaurantes",
    "Portugal",
  ],

  authors: [
    {
      name: "Essentiq",
      url: "https://www.essentiq.pt",
    },
  ],

  creator: "Essentiq",
  publisher: "Essentiq",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "/",
    siteName: "Essentiq",
    title: "Essentiq | Aromatização Profissional de Espaços",
    description:
      "Transformamos espaços através do aroma. Soluções profissionais de aromatização, instalação e acompanhamento para empresas e eventos.",
    images: [
      {
        url: "/images/evento.jpeg",
        width: 1200,
        height: 630,
        alt: "Essentiq — Fragrância Ambiente Premium",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Essentiq | Aromatização Profissional de Espaços",
    description:
      "Transformamos espaços através do aroma com soluções profissionais de fragrância ambiente.",
    images: ["/images/evento.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "business",

  // Só mantém esta parte quando os ficheiros existirem dentro de app/
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17120f",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Essentiq",
  url: "https://www.essentiq.pt",
  logo: "https://www.essentiq.pt/logo.jpeg",
  description:
    "Soluções premium de fragrância ambiente para hotéis, bares, restaurantes, eventos e espaços comerciais.",
  email: "cruz.agripino.lda@gmail.com",
  telephone: "+351962783456",
  sameAs: ["https://www.instagram.com/essentiq_pt/"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}