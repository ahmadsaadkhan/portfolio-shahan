import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio App',
  description: '3D animation and #d Modeling.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
