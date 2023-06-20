'use client';

import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery'
import DesktopMenu from './Menus/DesktopMenu';
import MobileMenu from './Menus/MobileMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 1024px)')
  const LiU = "/images/logos/liu.png"

  // Check the pathname to see if header should be included or not
  const pathname = usePathname();
  if (pathname == "/nolleboken")
    return null;

  return (
    <header className="h-20 p-4 flex justify-between">
      <div>
        <Link href={'/'}>
          <Image
            src={LiU}
            width={200}
            height={100}
            alt="LiU logga"
          />
        </Link>

      </div>
      {/* Render navigation menu based on which device website is viewed on */}
      {!isMobile ?
        (
          <DesktopMenu />
        ) : (
          <div>
            <Bars3Icon className='w-14 h-14 self-end' onClick={() => setMenuIsOpen(true)} />
            <MobileMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          </div>
        )
      }


    </header >
  )
}

export default Header

//TODO: add soft shadow below
//TODO: add routes to new pages (not created yet)