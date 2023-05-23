import React from 'react'
import Link from 'next/link';
import { isMobile } from 'react-device-detect'

type Props = {
  title: string
  redirect: any
}

const MenuItem = (props: Props) => {
  // Tailwind classes applied to the div
  const defaultStyle = "font-proxima font-light text-3xl h-fit mobile:self-end mobile:text-4xl";
  const hoverStyle = "hover:border-blackText hover:cursor-pointer hover:inline-block after:block after:border-b-2 after:border-blackText"

  // Since next/link is an extension of html/a, it can handle both URLs and local paths in app
  return (
    <div className={defaultStyle + " " + hoverStyle + " menu_item"}>
      <Link href={props.redirect}>{props.title}</Link>
    </div >
  )
}

export default MenuItem