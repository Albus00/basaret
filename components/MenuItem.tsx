import React from 'react'
import Link from 'next/link';
import { isMobile } from 'react-device-detect';

type Props = {
  title: string
  redirect: any
  isMobile: boolean
  setMenuIsOpen: Function
}

const MenuItem = (props: Props) => {
  // Tailwind classes applied to the div
  const defaultStyle = "font-proxima font-light text-3xl h-fit handheld:text-5xl handheld:self-end mobile:text-4xl thin:text-2xl ";
  const hoverStyle = "hover:border-blackText hover:cursor-pointer hover:inline-block after:block after:border-b-2 after:border-blackText"

  // Since next/link is an extension of html/a, it can handle both URLs and local paths in app
  return (
    <div className={
      !props.isMobile ?
        (defaultStyle + " " + hoverStyle + " menu_item_effect") :
        (defaultStyle)}>
      <Link
        href={props.redirect}
        onClick={isMobile ? (() => props.setMenuIsOpen(false)) : (() => undefined)}   // Call function to close the navmenu if on mobile
      >{props.title}</Link>
    </div >
  )
}

export default MenuItem