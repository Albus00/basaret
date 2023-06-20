import React from 'react'

type Props = {
  header: string;
  alcohol: boolean;
  description: string;
}

function ActivityContainer(props: Props) {
  return (
    <div className='pl-10'>
      <h4>{props.header}</h4>
      <p className='pl-4'>{props.description}</p>
    </div>
  )
}

export default ActivityContainer