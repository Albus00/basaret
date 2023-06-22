import React from 'react'

type Props = {
  header: string;
  location: string;
  time: string;
  alcohol: boolean;
  description: string;
}

function ActivityContainer(props: Props) {
  return (
    <div className='px-10 mt-4 mobile:pl-4'>
      <div>
        <h6>{props.time}</h6>
        <h5>{props.location}</h5>
        <h4>{props.header}</h4>
      </div>
      <p className='pl-4'>{props.description}</p>
    </div>
  )
}

export default ActivityContainer