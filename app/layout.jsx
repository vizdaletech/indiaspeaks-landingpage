import './globals.css'
import {roboto} from "@/typography/font"
import Navbar from './shared/navbar/desktop/main'
import NavbarMobile from './shared/navbar/mobile/main'
import Footer from './shared/footer/desktop/main'
import FooterMobile from './shared/footer/mobile/main'


export const metadata = {
  title: 'India Speaks',
  description: "Let's speak our language",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        <NavbarMobile/>
        <main>

        {children}
        </main>
        <Footer/>
        <FooterMobile/>
        </body>
    </html>
  )
}
