import React from 'react';
import { defaultStyle, hoverStyle } from './ButtonStyle';
import Image from 'next/image';

type Props = {
  title1: string
  title2: string
  url: string
}

const TextButton = (props: Props) => {
  const logo = "/images/logos/instagram.png";

  return (
    <a href={props.url} className="mobile:self-center">
      <button className={defaultStyle + " " + hoverStyle + " pr-3 styled_button flex text-whiteText items-center"} >
        <div>
          {props.title1}
          <span className="mobile:hidden">{props.title2}</span>
        </div>
        <Image
          src={logo}
          width={40}
          height={40}
          alt="instagram logo"
          className="pl-3 mobile:h-6" />
      </button>
    </a>
  )
}

export default TextButton