'use client'

import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import MenuItem from './MenuItem'

const MobileMenu = () => {

  return (
    <div className={"fixed top-0 right-0 h-screen w-10/12 bg-background transition-all ease-in-out shadow-2xl" + translationStyle} >
      <div className="flex flex-col p-4 space-y-5">
        <XMarkIcon className='w-14 h-14 self-end' onClick={() => props.menuOnClick()} />
        <MenuItem
          title={"Hem"}
          redirect={"/"}
        />
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
      </div>
    </div>
  )
}

export default MobileMenu