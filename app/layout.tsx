import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "@/app/providers";

import { siteConfig } from "@/config/site";
import Navbar from "@components/nav";
import Footer from "@components/footer";
import BottomNav from "@components/nav_bottom";

import AnimatedCursor from "react-animated-cursor";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};






export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased"
        )}
      >
        <Providers>
            <AnimatedCursor
          innerSize={15}
          outerSize={20}
          innerScale={1}
          outerScale={2.5}
          outerAlpha={0}
          innerStyle={{ backgroundColor: "#fff" }}
          outerStyle={{ border: "3px solid #BEF264" }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
            <Navbar />
            <main>
              {children}
            </main>
            <Footer/>
            <BottomNav/>
        </Providers>
      </body>
    </html>
  );
}
