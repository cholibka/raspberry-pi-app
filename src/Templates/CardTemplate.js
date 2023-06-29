import {Link} from "react-router-dom";
import {SENSORS} from "../constants";
import CustomChart from "../Pages/Charts/CustomChart";

function CardTemplate({sensor, min, max}) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const detailsString = str => {
        return `/${str}`;
    }

    return (
        <div className="container mx-auto bg-gray-100 dark:bg-slate-900 rounded-xl shadow border p-8 dark:text-white/80 dark:border-slate-900">
            <Link to={detailsString(sensor)}
               className="float-right inline-flex items-center ml-2 text-sm font-medium text-fuchsia-600 md:ml-2 dark:text-fuchsia-500 hover:underline">
                Show more
                <svg className="w-4 h-4 ml-1 text-fuchsia-600 dark:text-fuchsia-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </Link>
            <p className="text-3xl text-gray-600 font-bold mb-5 dark:text-white/70">
                {capitalizeFirst(sensor)}
            </p>
            <div className="flex flex-row h-full w-full">
                <div className="h-5/6 w-4/5">
                   <CustomChart sensor={sensor}/>
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

        </div>
    );
}

export default CardTemplate;