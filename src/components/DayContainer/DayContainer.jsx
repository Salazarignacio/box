import { DateTime } from "luxon";
import DayList from "./DayList";
import EmptyDay from "./EmpityDay";
import { componentsQuantity } from "../MonthContainer/MonthContainer";

export default function DayContainer({ month, year }) {
  const dia = DateTime.local(year, month, 1).weekdayLong.toLocaleString(
    DateTime.DATE_HUGE
  );

  const monthNumber = DateTime.local(year, month);

  const monthName = DateTime.local(year, month, 1)
    .monthLong.toLocaleString(DateTime.DATE_HUGE)
    .toUpperCase();

  const whatDayIs = (a) => {
    return DateTime.local(year, month, a).weekdayLong.toLocaleString(
      DateTime.DATE_HUGE
    );
  };

  const howMuchEmpties = (d, a, dia) => {
    if (whatDayIs(a) == dia && a == 1) {
      const map = (
        <>
          {d.map((c) => {
            return (
              <EmptyDay
                key={c}
                day={a}
                month={month}
                year={year}
                dayName={whatDayIs(a)}
              />
            );
          })}
{/*           <DayList
            key={a}
            day={a}
            month={month}
            year={year}
            dayName={whatDayIs(a)}
          /> */}
        </>
      );
      return map;
    } /* else {
      return (
        <>
          <DayList
            key={a}
            day={a}
            month={month}
            year={year}
            dayName={whatDayIs(a)}
          />
        </>
      );
    } */
  };

  let domingo = ["a", "b", "c", "d", "e", "f"];
  let sabado = ["a", "b", "c", "d", "e"];
  let viernes = ["a", "b", "c", "d" ];
  let jueves = ["a", "b", "c" ];
  let miercoles = ["a", "b" ];
  let martes = ["a" ];
  return (
    <>
      <div className="Contenedor">
        <h1>{monthName}</h1>

        <div className="DaysContainer">
          {componentsQuantity(monthNumber.daysInMonth).map((a, b) => {
            return (
              <>
                {howMuchEmpties(domingo, a, "domingo")}{" "}
                {howMuchEmpties(sabado, a, "sábado")}
                {howMuchEmpties(viernes, a, "viernes")}
                {howMuchEmpties(jueves, a, "jueves")}
                {howMuchEmpties(miercoles, a, "miércoles")}
                {howMuchEmpties(martes, a, "martes")}
                <DayList
                  key={a}
                  day={a}
                  month={month}
                  year={year}
                  dayName={whatDayIs(a)}
                />{" "}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
