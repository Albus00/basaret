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
  const iconStyling = "h-4 w-4 mr-2 handheld:h-7 handheld:w-7 mobile:h-4 mobile:w-4";
  const img_src = "/images/" + props.name.split(" ")[0].toLowerCase() + ".jpg";

  return (
    <div className="
      h-screen text-center pb-10 px-5
      handheld:px-36 handheld:h-auto
      mobile:px-0 mobile:mx-8
      thin:mx-0
      ">
      <div className='aspect-[5/7] h-3/4 relative m-auto mobile:h-auto thin:mx-4'>
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
        thin:text-lg
        ">
        <div className="flex justify-center items-center thin:mb-2">
          <PhoneIcon className={iconStyling} />
          {props.phone}
        </div>
        <div className="flex justify-center items-center thin:mb-2">
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