'use client';

import React from 'react'
import { usePathname } from 'next/navigation';

type Props = {
  children: string;
}

const Footer = (props: Props) => {
  // Check the pathname to see if footer should be included or not
  const pathname = usePathname();
  if (pathname == "/nolleboken")
    return null;

  // Split text for breakpoint on mobile devices
  const text = props.children.split('.');
  text[0] += '.';

  return (
    <footer className="
      bg-footer text-whiteText text-center py-2 italic
      thin:text-sm
      ">
      {/* If on mobile, make the text into two rows */}
      {text[0]}<br className="hidden mobile:block" />{text[1]}
    </footer>
  )
}

export default Footer