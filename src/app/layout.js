import { site } from "@/data";
import Chatbot from "@/components/chat/Chatbot";
import "./globals.css";

export const metadata = {
  title: site.brand,
  description: site.description,
  icons: {
    icon: site.logo,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important; transform:none !important;}`}</style>
        </noscript>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
