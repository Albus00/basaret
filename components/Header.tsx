'use client';

import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery'
import DesktopMenu from './Menus/DesktopMenu';
import MobileMenu from './Menus/MobileMenu';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 1024px)')
  const LiU = "/images/logos/liu.png"

  // Check the pathname to see if header should be included or not
  const pathname = usePathname();
  const router = useRouter()

  if (pathname == "/nolleboken")
    return null;

  return (
    <header className="h-20 pb-4 flex justify-between">
      <div className='relative ml-4 mt-4 w-48 mobile:w-36' >
        <Image
          src={LiU}
          fill
          alt="LiU logga"
          sizes="33vw"
          className="object-contain cursor-pointer"
          onClick={() => router.push('/')}
        />
      </div>
      {/* Render navigation menu based on which device website is viewed on */}
      {!isMobile ?
        (
          <DesktopMenu />
        ) : (
          <div>
            <Bars3Icon className='w-14 h-14 m-4 self-end' onClick={() => setMenuIsOpen(true)} />
            <MobileMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          </div>
        )
      }


    </header >
  )
}

export default Header