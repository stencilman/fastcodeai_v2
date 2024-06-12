
import "./globals.css";
import Navbar from "./component/Navbar";
import localFont from "next/font/local"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GlobalProvider } from "./context/GlobalContext";
import SmoothScroll from "./component/SmoothScroll";
import ClientWrapper from "./component/ClientWrapper";

// const inter = Inter({ subsets: ["latin"] });

const aeonik = localFont({
  src: [
    {
      path: "../../public/fonts/aeonik/AeonikTRIAL-Light.woff2",
      weight: "300", //light
      style: "normal"
    },
    {
      path: "../../public/fonts/aeonik/AeonikTRIAL-Regular.woff2",
      weight: "400", //regular
      style: "normal"
    },
    {
      path: "../../public/fonts/aeonik/AeonikTRIAL-Bold.woff2",
      weight: "700", //bold
      style: "normal"
    },

  ],
  variable: "--font-aeonik"
})

const bwmss01 = localFont({
  src: [
    {
      path: "../../public/fonts/BwModelica_SS01/BwModelicaSS01-Regular.woff2",
      weight: "300", //light
      style: "normal"
    },
    {
      path: "../../public/fonts/BwModelica_SS01/BwModelicaSS01-Bold.woff2",
      weight: "700", //bold
      style: "normal"
    },


  ],
  variable: "--font-bwmss01"
})

export const metadata = {
  title:{
    default: "Fast Code AI",
    template : "%s - Fast Code AI"
  },
  description: "Fast Code AI - Accelerating Innovation",
  
};

export default function RootLayout({ children }) {
  
  return (
    <html  lang="en" >
      <body className={`${aeonik.variable} ${bwmss01.variable}`}>
      <link rel="icon" href="/fcai.ico" sizes="any" />
        <GlobalProvider>
          <ClientWrapper>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
          </ClientWrapper>
          <SpeedInsights />
        </GlobalProvider>
      </body>
    </html>
  );
}
