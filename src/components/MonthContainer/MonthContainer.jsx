import { DateTime } from "luxon";
import DayContainer from '../DayContainer/DayContainer'
import EmptyDay from "../DayContainer/EmpityDay";

export const componentsQuantity = (date) => {
  const time = [];
  for (let i = 1; i < date + 1; i++) {
    time.push(i);
  }
  return time;
};



export default function MonthsContainer({year}) {
  return (<>
      <h2>{year}</h2>
    <div className="Months ">
      {componentsQuantity(12).map((a, b) => {
        return <DayContainer key={b} month={a} year={year}/>;
      })}
    </div>
    </>
  );
}
