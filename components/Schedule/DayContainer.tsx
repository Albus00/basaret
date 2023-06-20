import React from 'react'
import ActivityContainer from './ActivityContainer';

type Props = {
  currentDate: Date;
  date: string;
  weekday: string;
  color: string;
  activities: { header: string, alcohol: boolean, description: string }[];
}

function DayContainer(props: Props) {
  // Don't render if day have already passed
  // const currentDay = props.currentDate.getDay();
  // const currentMonth = props.currentDate.getMonth();
  const currentDay = 3;
  const currentMonth = 9;
  const activityDay = Number(props.date.split('/')[0]);
  const activityMonth = Number(props.date.split('/')[1]);

  if (currentMonth > activityMonth || (currentMonth == activityMonth && currentDay > activityDay)) {
    return null;
  }

  const customColor = "bg-" + props.color;

  return (
    <div className='w-3/5 bg-background p-4 mb-5 min-h-[15rem]'>
      {/* Tailwind custom colors does not seem to work if they're not written out manually once on the website */}
      <div className='bg-customGreen'></div>
      <div className='bg-customBlue'></div>
      {/* --------------- TODO: Remove above ----------------- */}
      <div className={customColor + " w-fit flex"}>
        <h3 className={'p-4 m-0'}>{props.weekday.toUpperCase() + " - " + props.date}</h3>
      </div>
      <div className='w-full'>
        {props.activities.map((activity) => {
          return (
            <ActivityContainer
              key={activity.header}
              header={activity.header}
              alcohol={activity.alcohol}
              description={activity.description}
            />
          );
        })}
      </div>
    </div>
  )
}

export default DayContainer