import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import MenuItem from '../MenuItem'

type Props = {
  menuIsOpen: boolean
  setMenuIsOpen: Function
}

const MobileMenu = (props: Props) => {
  return (
    <div className={`fixed top-0 flex h-screen w-full transition-all ease-in-out shadow-2xl ${props.menuIsOpen ? "right-0" : "-right-full"}`}>
      <div className="w-1/6" onClick={() => props.setMenuIsOpen(false)} />
      <div className="w-10/12 bg-background">
        <div className="flex flex-col p-4 space-y-5">
          <XMarkIcon className='w-14 h-14 self-end' onClick={() => props.setMenuIsOpen(false)} />
          <MenuItem
            title={"Hem"}
            redirect={"/"}
            isMobile={true}
            setMenuIsOpen={props.setMenuIsOpen}
          />
          <MenuItem
            title={"Aktivitetsschema"}
            redirect={"aktivitet"}
            isMobile={true}
            setMenuIsOpen={props.setMenuIsOpen}
          />
          <MenuItem
            title={"Schema Basår"}
            redirect={"https://cloud.timeedit.net/liu/web/schema/ri167XQQ698Z50Qm37070gZ6y5Y7505Q6Y95Y7.html"}
            isMobile={true}
            setMenuIsOpen={props.setMenuIsOpen}
          />
          <MenuItem
            title={"Nolleboken"}
            redirect={"nolleboken.pdf"}
            isMobile={true}
            setMenuIsOpen={props.setMenuIsOpen}
          />
        </div>
      </div>
    </div>
  )
}

export default MobileMenu