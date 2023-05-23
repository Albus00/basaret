import React from 'react'

type Props = {
  children: string;
}

const Footer = (props: Props) => {
  // Split text for breakpoint on mobile devices
  const text = props.children.split('.');
  text[0] += '.';

  return (
    <div className="
      bg-footer text-whiteText text-center py-2 italic
      thin:text-sm
      ">
      {text[0]}<br className="hidden mobile:block" />{text[1]}
    </div>
  )
}

export default Footer