import Header from '../components/Header'
import Provider from '../components/Provider'
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
        <Provider>
          <Header />
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
