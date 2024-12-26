import {
  Inter,
  Montserrat,
  Rock_Salt,
} from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-rock-salt",
})

const fonts = {
  inter: inter.variable,
  montserrat: montserrat.variable,
  rockSalt: rockSalt.variable,
}

export default fonts
