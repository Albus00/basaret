'use client'

import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import { usePathname } from "next/navigation";

export const metadata = {
  title: 'Basåret',
  description: 'Hemsidan för Basåret på Linköpings Universitet, Campus Norrköping'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      {pathname != "/nolleboken" ? (
        <body className='w-full'>
          <Header />
          <div>
            {children}
          </div>
          <Footer>
            @2023 Albin Kjellberg. Denna hemsida är byggd av studenter vid LiU
          </Footer>
        </body>
      ) : (
        <body className='w-full'>
          <div>
            {children}
          </div>
        </body>
      )}
    </html>
  )
}
