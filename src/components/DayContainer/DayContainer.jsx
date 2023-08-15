import { DateTime } from "luxon";
import DayList from "./DayList";
import EmptyDay from "./EmpityDay";
import { componentsQuantity } from "../MonthContainer/MonthContainer";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function DayContainer({ month, year }) {
  const theme = useContext(ThemeContext)
  const {off, setOff} = theme
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
            return <EmptyDay />;
          })}
        </>
      );
      return map;
    }
  };

  let domingo = ["a", "b", "c", "d", "e", "f"];
  let sabado = ["a2", "b2", "c2", "d2", "e2"];
  let viernes = ["a1", "b1", "c1", "d1"];
  let jueves = ["a3", "b3", "c3"];
  let miercoles = ["a4", "b4"];
  let martes = ["a5"];
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
                  key={b}
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
