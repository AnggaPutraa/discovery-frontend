import Hero from '../components/Hero'
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
        <Hero />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
