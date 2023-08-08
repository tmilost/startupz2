import './globals.scss'
import localFont from 'next/font/local'

const circularStd = localFont({ src: '../../public/circularStd.ttf' })

export const metadata = {
  title: 'Startupz',
  description: 'Startupz fictional startup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={circularStd.className}>{children}</body>
    </html>
  )
}
