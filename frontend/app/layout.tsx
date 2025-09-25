import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'PromptNest MVP',
  description: 'Your AI prompt management platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8 bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
