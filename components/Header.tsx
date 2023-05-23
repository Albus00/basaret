import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Bars3Icon } from '@heroicons/react/24/solid'

import MenuItem from './MenuItem'
import Image from 'next/image'

const Header = () => {
  const LiU = "/images/logos/liu.png"

  return (
    <div className="h-20 p-4 flex justify-between">
      <div>
        <Image
          src={LiU}
          width={200}
          height={100}
          alt="LiU logga"
        />
      </div>
      {/* Render navigation menu based on which device website is viewed on */}
      <BrowserView className="flex flex-row flex-wrap justify-end content-end space-x-10">
        <MenuItem
          title={"Aktivitetsschema"}
          redirect={"aktivitet"}
        />
        <MenuItem
          title={"Schema Basår"}
          redirect={"https://cloud.timeedit.net/liu/web/schema/ri167XQQ597Z50Qm37070gZ6y5Y7700Q6Y93Y7.html"}
        />
        <MenuItem
          title={"Nolleboken"}
          redirect={"nolleboken"}
        />
      </BrowserView>
      <MobileView>
        {/* <Bars3Icon className='w-14 h-14' onClick={() => props.menuOnClick()} /> */}
      </MobileView>
    </div>
  )
}

export default Header

//TODO: add soft shadow below
//TODO: add routes to new pages (not created yet)