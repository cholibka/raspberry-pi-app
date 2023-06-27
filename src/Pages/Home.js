import Light from "./MainView/Light";
import Temperature from "./MainView/Temperature";
import Motion from "./MainView/Motion";
import Pressure from "./MainView/Pressure";

function Home() {
    return (
        <>
            <div className="px-16 py-16 grid grid-cols-2 gap-4 h-screen">
                <Temperature/>
                <Light/>
                <Motion/>
                <Pressure/>
            </div>
        </>
    );
}

export default Home;