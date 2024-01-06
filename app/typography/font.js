import {Roboto} from "next/font/google"
import { Noto_Sans } from "next/font/google"
import { Nunito_Sans } from "next/font/google"

export const roboto = Roboto({subsets : ["latin"], weight : [ "100", "300", "400","500", "700","900"]})
export const noto_sans = Noto_Sans({subsets : ["latin"], weight : [ "100", "300", "400","500", "700","900"]})
export const nunito_sans = Nunito_Sans({subsets : ["latin"], weight : ["300", "400","500", "700","900"]})