import { Merriweather } from "next/font/google";
import localFont from "next/font/local";

export const inter = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const handwritting = localFont({
  src: "../../public/font/handwritting.ttf",
  variable: "--font-handwritting",
});
