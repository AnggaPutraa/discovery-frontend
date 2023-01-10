import Hedaer from '../components/Header'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Hedaer />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
