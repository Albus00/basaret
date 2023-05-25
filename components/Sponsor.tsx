import Image from 'next/image'
import React from 'react'

type Props = {
  company: string
  img_src: string
  className: string
}

const Sponsor = (props: Props) => {
  return (
    <div className={
      props.className +
      " relative" +
      " handheld:px-0"
    }>
      <Image
        src={props.img_src}
        fill
        alt={props.company}
        className="
          object-contain
        " />
    </div>
  )
}

// h-full
// handheld:max-h-44
// mobile:max-h-32

export default Sponsor