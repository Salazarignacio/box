import DayContainer from '../DayContainer/DayContainer'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const componentsQuantity = (date) => {
  const time = [];
  for (let i = 1; i < date + 1; i++) {
    time.push(i);
  }
  return time;
};



export default function MonthsContainer() {
  const {yearId} = useParams()
  return (<>
      <h2>{parseInt(yearId)}</h2>

      {/* <select>
  <option>{yearId}</option>
  <option>{2024}</option>
  <option>{2025}</option>
</select> */}
    <div className="Months ">
      {componentsQuantity(12).map((a, b) => {
        return <DayContainer key={b} month={a} year={parseInt(yearId)}/>;
      })}
    </div>
    <Link to={"/"}><button className='btn btn-secondary'>Volver</button></Link>
    </>
  );
}
