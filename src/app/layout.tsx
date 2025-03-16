import { Header } from 'src/components/Header/header'
import './global.css'
import { MainContent } from 'src/components/Main/main-content'
export const metadata = {
  title: 'Gamified',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-mint-500 w-full  h-screen ">
        {
          <main className="w-full max-w-[1300px] mx-auto h-screen mt-5">
            <Header />

            <MainContent>{children}</MainContent>
          </main>
        }
      </body>
    </html>
  )
}
