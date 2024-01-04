import './globals.css'
import {roboto} from "@/typography/font"

export const metadata = {
  title: 'India Speaks',
  description: "Let's speak our language",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
