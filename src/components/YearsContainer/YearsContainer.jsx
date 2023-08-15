import './YearsContainer.css'
import { Link } from "react-router-dom";

export default function YearsContainer({year}) {
  return (
    <div className="YearsContainer">
      

      
      <div className="Year">
       <Link to={`/months/${year}`}><button className='btn btn-secondary mb-1'>{year}</button></Link>      
    </div>
      
    </div>
  );
}
