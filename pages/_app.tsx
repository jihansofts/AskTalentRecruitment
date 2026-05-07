import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "@/components/MainHeader";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import FooterBottomBar from "@/components/FooterBottomBar";
import SimpleFooter from "@/components/SimpleFooter";

const AOS = dynamic(() => import("aos"), { ssr: false });
import "aos/dist/aos.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Only initialize AOS on client side and once
    if (typeof window !== "undefined") {
      import("aos").then((AOSModule) => {
        AOSModule.default.init({
          duration: 800,
          once: true, // Prevent re-triggering animations
          offset: 100,
          disable: "phone",
        });
      });
    }
  }, []);

  return (
    <div className={`${montserrat.variable} font-sans`}>
      <MainHeader />
      <Component {...pageProps} />
      <FooterBottomBar />
      <SimpleFooter />
    </div>
  );
}
