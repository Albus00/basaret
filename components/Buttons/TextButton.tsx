import React from 'react'
import { defaultStyle, hoverStyle } from './ButtonStyle';

type Props = {
  title: string
  url: string
}

const TextButton = (props: Props) => {

  return (
    <a href={props.url} className="mobile:self-center thin:max-w-[12rem]">
      <button className={"bg-customYellow " + defaultStyle + " " + hoverStyle}>
        {props.title}
      </button>
    </a>
  )
}

export default TextButton