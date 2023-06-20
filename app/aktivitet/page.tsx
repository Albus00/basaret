import { useEffect } from 'react';

import DayContainer from "@/components/Schedule/DayContainer";
import { schedule } from "@/data/schedule_data";

export default function Page() {
  const date = new Date();
  const currentDate = date.getDay() + "/" + date.getMonth();

  return (
    <main className="bg-slate-100 flex flex-col items-center pb-10 flex-1">
      <h1 className="py-10">Aktivitetsschema</h1>

      {/* Generate character cards from the stories JSON file */}
      {schedule.map((day) => {
        return (
          <DayContainer
            key={day.date}
            currentDate={currentDate}
            date={day.date}
            color={day.color}
            weekday={day.weekday}
            activities={day.activities}

          />
        );
      })}
    </main>
  )
}