import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import MenuItem from './MenuItem'

type Props = {
  menuOnClick: Function
  slideMenu: boolean
  navigateToPage: Function
}

const MobileMenu = (props: Props) => {
  let translationStyle = '';

  // Used for the sliding animation. Component starts outside the viewport and when activated slides in
  if (props.slideMenu) {
    translationStyle = " translate-x-0";
  }
  else {
    translationStyle = " translate-x-full";
  }

  console.log(props.slideMenu)
  return (
    <div className={"fixed top-0 right-0 h-screen w-10/12 bg-background transition-all ease-in-out shadow-2xl" + translationStyle} >
      <div className="flex flex-col p-4 space-y-5">
        <XMarkIcon className='w-14 h-14 self-end' onClick={() => props.menuOnClick()} />
        <MenuItem
          title={"Hem"}
          redirect={"/"}
          navigateToPage={props.navigateToPage}
          menuOnClick={props.menuOnClick}
        />
        <MenuItem
          title={"Aktivitetsschema"}
          redirect={"aktivitet"}
          navigateToPage={props.navigateToPage}
          menuOnClick={props.menuOnClick}
        />
        <MenuItem
          title={"Schema Basår"}
          redirect={"https://cloud.timeedit.net/liu/web/schema/ri167XQQ597Z50Qm37070gZ6y5Y7700Q6Y93Y7.html"}
          navigateToPage={props.navigateToPage}
          menuOnClick={props.menuOnClick}
        />
        <MenuItem
          title={"Nolleboken"}
          redirect={"nolleboken"}
          navigateToPage={props.navigateToPage}
          menuOnClick={props.menuOnClick}
        />
      </div>
    </div>
  )
}

export default MobileMenu