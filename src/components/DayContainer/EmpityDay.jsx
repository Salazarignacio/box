import Day from "./Day";
import { DateTime } from "luxon";

export default function EmptyDay({day, month, year, dayName}){
    return (
        <>
          <div>
{/*             <p>{day <= 7 && dayName[0].toUpperCase()}</p> */}

            <div className="Day">
              <div>
                <div
               
                  className={"dayListButton"}
                >
                    <p></p>
                  {/* {DateTime.local(year, month, day).day.toLocaleString(DateTime)} */}
                </div>
              </div>
    
             {/*  {on && (
                <Day
                  day={day}
                  month={month}
                  year={year}
                  inputs={getDay}
                  setInputs={setGetDay}
                  on={on}
                  setOn={setOn}
                />
              )} */}
            </div>
          </div>
        </>
      );
}