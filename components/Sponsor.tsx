import Image from 'next/image'
import React from 'react'

type Props = {
  company: string
  className: string
}

const Sponsor = (props: Props) => {
  const img_src = "/images/sponsors/" + props.company.toLowerCase() + ".png";

  return (
    <div className={
      props.className +
      " relative" +
      " handheld:px-0"
    }>
      <Image
        src={img_src}
        fill
        alt={props.company}
        sizes="50vw"
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