import Day from "./Day";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import {doc, getDoc} from 'firebase/firestore';
import { db } from "../SendData/fbConfig";

export default function DayList({ month, dayName, day, year }) {
  const [inputs, setInputs] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    uno: 0,
    dos: 0,
    tres: 0,
    efInicial: 0,
    efFinal: 0,
  });

  const [on, setOn] = useState(false);
  const [getDay, setGetDay] = useState("");

  useEffect(() => {
    
    const ref = doc(
      db,
      "caja",
      DateTime.local(year, month, day).toLocaleString(DateTime.DATE_FULL)
    );
    getDoc(ref).then((snapShot) => {
      if (snapShot.exists()) {
        setGetDay({ ...snapShot.data() })
      } else setGetDay({...inputs})
    });
  }, []);

  return (
    <>
      <div >
         <p>{day <= 7 && dayName[0].toUpperCase()}</p>
         

        <div className="Day">
          <div>
            <div
              onClick={() => {
                
                setOn(true);
              }}
              className={"dayListButton"}
            >
              
              {DateTime.local(year, month, day).day.toLocaleString(DateTime)}
            </div>
          </div>

          {on && (
                <Day
                day={day}
                month={month}
                year={year}
                inputs={getDay}
                setInputs={setGetDay}
                on={on}
                setOn={setOn}
              />
          )} 
        </div>
      </div>
    </>
  );
}
