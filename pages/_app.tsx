import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "@/components/MainHeader";
import { Montserrat, Roboto } from "next/font/google";
import { useEffect } from "react";
import FooterBottomBar from "@/components/FooterBottomBar";
import SimpleFooter from "@/components/SimpleFooter";
import "aos/dist/aos.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
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
    <div className={`${montserrat.variable} ${roboto.variable} font-sans`}>
      <MainHeader />
      <Component {...pageProps} />
      <FooterBottomBar />
      <SimpleFooter />
    </div>
  );
}
