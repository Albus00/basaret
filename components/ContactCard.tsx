import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

type Props = {
  name: string
  phone: string
  email: string
  program: string
  img_src: string
}

const ContactCard = (props: Props) => {
  // Styling for icons placed as const, for easier modification
  const iconStyling = "h-4 w-4 mr-2 handheld:h-7 handheld:w-7 mobile:h-6 mobile:w-6";

  return (
    <div className="
      w-96 px-8 text-center 
      handheld:w-screen handheld:px-36
      mobile:px-8
      ">
      <Image
        src={props.img_src}
        width={2048}
        height={1365}
        alt={props.name}
        className="
          border border-solid border-blackText rounded-3xl
        " />
      <h3 className="
        handheld:text-6xl handheld:py-5
        mobile:spacing-400 mobile:break-normal
        thin:text-3xl
        ">
        {props.name}
      </h3>
      <div className="
        flex flex-col text-m
        handheld:text-3xl
        mobile:text-2xl
        thin:text-xl
        ">
        <div className="flex justify-center items-center">
          <PhoneIcon className={iconStyling} />
          {props.phone}
        </div>
        <div className="flex justify-center items-center">
          <EnvelopeIcon className={iconStyling} />
          {props.email}
        </div>
        <div className="flex justify-center">
          {props.program}
        </div>
      </div>
    </div>
  )
}

export default ContactCard