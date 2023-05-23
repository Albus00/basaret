import Image from 'next/image'
import React from 'react'

type Props = {
  company: string
  img_src: string
  width: number
  height: number
}

const Sponsor = (props: Props) => {
  return (
    <div className="
      px-8
      handheld:px-0
      ">
      <Image
        src={props.img_src}
        width={props.width}
        height={props.height}
        alt={props.company}
        className="
        h-full
        handheld:max-h-44
        mobile:max-h-32
        " />
    </div>
  )
}

export default Sponsor