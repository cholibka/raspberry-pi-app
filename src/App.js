import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MotionDetails from "./Pages/Details/MotionDetails";
import TemperatureDetails from "./Pages/Details/TemperatureDetails";
import PressureDetails from "./Pages/Details/PressureDetails";
import LightDetails from "./Pages/Details/LightDetails";
import Home from "./Pages/Home";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/"  element={<Home/>}/>
                  <Route path="/motion" element={<MotionDetails />} />
                  <Route path="/temperature" element={<TemperatureDetails />} />
                  <Route path="/pressure" element={<PressureDetails />} />
                  <Route path="/light" element={<LightDetails />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
