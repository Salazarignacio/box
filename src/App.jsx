
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* 
import "./App.css"; */
import YearsContainer from "./components/YearsContainer/YearsContainer";

import MonthsContainer from "./components/MonthContainer/MonthContainer";


function App() {
  /* const dateMonth = DateTime.local(2023, 1, 1); */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<YearsContainer year={2023} />} />
          <Route exact path="/months" element={<MonthsContainer year={2023}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
