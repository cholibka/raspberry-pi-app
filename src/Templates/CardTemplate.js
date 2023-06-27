import TempChart from "../Pages/Charts/TempChart";
import MotionChart from "../Pages/Charts/MotionChart";
import LightChart from "../Pages/Charts/LightChart";
import PressureChart from "../Pages/Charts/PressureChart";
import {Link} from "react-router-dom";
import {SENSORS} from "../constants";

function CardTemplate({sensor, min, max}) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const detailsString = str => {
        return `/${str}`;
    }

    return (
        <>
            <Link to={detailsString(sensor)}
               className="float-right inline-flex items-center ml-2 text-sm font-medium text-pink-600 md:ml-2 dark:text-pink-500 hover:underline">
                Show more
                <svg className="w-4 h-4 ml-1 text-pink-600 dark:text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </Link>
            <p className="text-3xl text-gray-600 font-bold mb-5">
                {capitalizeFirst(sensor)}
            </p>
            <div className="flex flex-row h-full w-full">
                <div className="h-5/6 w-4/5">
                    {sensor === SENSORS["T"]  &&
                        <TempChart/>
                    }
                    {sensor === SENSORS["M"]  &&
                        <MotionChart/>
                    }
                    {sensor === SENSORS["L"]  &&
                        <LightChart/>
                    }
                    {sensor === SENSORS["P"]  &&
                        <PressureChart/>
                    }
                </div>
                    <div className="h-1/6 w-1/5 p-2 text-center flex flex-col items-center">
                    {(sensor === SENSORS["P"] || sensor === SENSORS["T"] ) &&
                        <>
                            <p className="text-sm font-normal flex flex-col items-center p-2">
                                Max
                                <span className="text-base font-medium">
                                    {max}
                                </span>
                            </p>
                            <p className="text-sm font-normal flex flex-col items-center">
                                Min
                                <span className="text-base font-medium">
                                   {min}
                                </span>
                            </p>
                        </>
                    }
                    {(sensor === SENSORS["M"] || sensor === SENSORS["L"] ) &&
                        <>
                            <p className="text-sm font-normal flex flex-col items-center p-2">
                                Last detected
                                <span className="text-base font-medium">
                                    {max}
                                </span>
                            </p>
                        </>
                    }
                    </div>
            </div>

        </>
    );
}

export default CardTemplate;