import './style/globals.css'
import './style/fonts.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// TODO:Add favicon
export const metadata = {
  title: 'Basåret',
  description: 'Hemsidan för Basåret på Linköpings Universitet, Campus Norrköping'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='w-full min-h-screen flex flex-col'>
        <Header />
        {children}
        <Footer>
          @2023 Albin Kjellberg. Denna hemsida är byggd av studenter vid LiU
        </Footer>
      </body>
    </html>
  )
}
