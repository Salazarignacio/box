import { BrowserRouter, Route, Routes } from "react-router-dom";
import YearsContainer from "./components/YearsContainer/YearsContainer";
import MonthsContainer from "./components/MonthContainer/MonthContainer";
import { createContext, useContext, useState } from "react";
import Container from './components/container/Container'

export const ThemeContext = createContext();
function App() {
  const [off, setOff] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ off, setOff }}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/box"
              element={
                <>
                
                <h1>Elige un año</h1>
                  <YearsContainer year={2023} /> <YearsContainer year={2024} />
                  <YearsContainer year={2025} /> <YearsContainer year={2026} />
                  <YearsContainer year={2027} />
                  <YearsContainer year={2028} />
                  <YearsContainer year={2029} />
                  <YearsContainer year={2030} />
                </>
              }
            />
            <Route exact path="/" element={<Container />} />
            <Route exact path="/months/:yearId" element={<MonthsContainer />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
