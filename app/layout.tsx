import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

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
      <body className='w-full'>
        <Header />
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
