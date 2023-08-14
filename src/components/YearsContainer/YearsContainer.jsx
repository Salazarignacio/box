import './YearsContainer.css'
import { Link } from "react-router-dom";

export default function YearsContainer({year}) {
  return (
    <div className="YearsContainer">
      <h1>Years Container</h1>

      
      <div className="Year">
       <Link to="/months"><button>{year}</button></Link>      
    </div>
      
    </div>
  );
}
