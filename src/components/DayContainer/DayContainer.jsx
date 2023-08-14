import { DateTime } from "luxon";
import DayList from "./DayList";
import { componentsQuantity } from "../MonthContainer/MonthContainer";

export default function DayContainer({ month, year }) {
  
const dia = DateTime.local(year, month, 1).weekdayLong.toLocaleString(
  DateTime.DATE_HUGE
)

  const monthNumber = DateTime.local(year, month);

  const monthName = DateTime.local(year, month, 1)
    .monthLong.toLocaleString(DateTime.DATE_HUGE)
    .toUpperCase();

    

  const whatDayIs = (a) => {
    return DateTime.local(year, month, a).weekdayLong.toLocaleString(
      DateTime.DATE_HUGE
    );
  };

  return (
    <>
      <div className="Contenedor">
        <h1>{monthName}</h1>

        <div className="DaysContainer">
   
          {componentsQuantity(monthNumber.daysInMonth).map((a, b) => {
            
            return (
              <DayList
               
                key={b}
                day={a}
                month={month}
                year={year}
                dayName={whatDayIs(a)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
