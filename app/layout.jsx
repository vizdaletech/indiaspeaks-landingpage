import './globals.css'
import {roboto} from "@/typography/font"
import Navbar from './shared/navbar/desktop/main'

export const metadata = {
  title: 'India Speaks',
  description: "Let's speak our language",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        <main>

        {children}
        </main>
        </body>
    </html>
  )
}
