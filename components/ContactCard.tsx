import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

type Props = {
  name: string
  phone: string
  email: string
  program: string
}

const ContactCard = (props: Props) => {
  // Styling for icons placed as const, for easier modification
  const iconStyling = "h-4 w-4 mr-2 handheld:h-7 handheld:w-7 mobile:h-6 mobile:w-6";
  const img_src = "/images/" + props.name.split(" ")[0].toLowerCase() + ".jpg";

  return (
    <div className="
      h-screen text-center pb-10 px-5
      handheld:px-36 handheld:h-screen
      mobile:px-0 mobile:h-auto
      ">
      <div className='aspect-[5/7] h-3/4 relative m-auto mobile:h-auto mobile:w-4/5'>
        <Image
          src={img_src}
          fill
          alt={props.name}
          sizes="70vw"
          className="
          border border-solid border-blackText rounded-3xl object-cover
        " />
      </div>

      <h3>{props.name}</h3>
      <div className="
        flex flex-col text-xl
        handheld:text-2xl
        thin:text-xl
        ">
        <div className="flex justify-center items-center">
          <PhoneIcon className={iconStyling} />
          {props.phone}
        </div>
        <div className="flex justify-center items-center">
          <EnvelopeIcon className={iconStyling} />
          <a href={"mailto:" + props.email}>
            {props.email}
          </a>
        </div>
        <div className="flex justify-center">
          {props.program}
        </div>
      </div>
    </div>
  )
}

export default ContactCard