import { Merriweather, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500", "600"],
});

export const handwritting = localFont({
  src: "../../public/font/handwritting.ttf",
  variable: "--font-handwritting",
});
