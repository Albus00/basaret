import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import MobileMenu from '@/components/MobileMenu'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <MobileMenu /> */}
        <div>
          {children}
        </div>
        <Footer>
          @2023 Albin Kjellberg. Denna hemsida är byggd av studenter vid LiU
        </Footer>
      </body>
    </html>
  )
}
