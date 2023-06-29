import React from 'react'
import Image from 'next/image'

type Props = {
  header: string;
  alcohol: boolean;
  description: string;
}

function ActivityContainer(props: Props) {
  return (
    <div className='pl-10 mobile:pl-4'>
      <div className='flex items-center mt-4' >
        <h4>{props.header}</h4>
        {!props.alcohol ? (
          <Image
            src={'/images/misc/alcohol.png'}
            width={24}
            height={24}
            alt="Alkoholfri"
            className='object-contain ml-2 mobile:ml-4'
          />
        ) : (null)}

      </div>
      <p className='pl-4 pr-8'>{props.description}</p>
    </div>
  )
}

export default ActivityContainer