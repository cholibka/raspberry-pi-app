import './App.css';
import Light from "./pages/Light";
import Temperature from "./pages/Temperature";
import Motion from "./pages/Motion";
import Pressure from "./pages/Pressure";

function App() {
  return (
      <div className="px-16 py-16 grid grid-cols-2 gap-4 h-screen">
          <Temperature/>
          <Light/>
          <Motion/>
          <Pressure/>
      </div>
  );
}

export default App;
