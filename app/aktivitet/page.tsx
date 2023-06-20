import DayContainer from "@/components/Schedule/DayContainer";
import { schedule } from "@/data/schedule_data";

export default function Page() {
  const currentDate = new Date();

  return (
    <main className="bg-slate-100 flex flex-col items-center justify-between pb-10">
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