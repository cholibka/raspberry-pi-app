import {Link} from "react-router-dom";
import {SENSORS} from "../constants";
import Datepicker from "react-tailwindcss-datepicker";
import {useState} from "react";
import CustomChart from "../Pages/Charts/CustomChart";

function FullCardTemplate({sensor}) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    return (
        <div className="px-16 py-16 grid h-screen w-screen bg-white dark:bg-slate-800">
            <div className="container bg-gray-100 dark:bg-slate-900 dark:text-white/80 dark:border-slate-900 rounded-xl shadow border min-w-full p-8">
                <p className="text-3xl text-gray-600 font-bold mb-5 ark:text-white/70">
                    {capitalizeFirst(sensor)}: Details Info
                </p>


                <div className="grid grid-cols-2 w-full h-full">
                    {(sensor === SENSORS["T"] || sensor === SENSORS["P"]) &&
                        <>
                            <div className="h-5/6 w-full">
                                <Datepicker
                                    primaryColor={"fuchsia"}
                                    useRange={false}
                                    asSingle={true}
                                    value={value}
                                    onChange={handleValueChange}
                                />
                               <CustomChart sensor={sensor}/>
                            </div>
                            <div className="h-5/6 w-full">
                                <CustomChart sensor={sensor}/>
                            </div>
                        </>
                    }

                    {(sensor === SENSORS["L"] || sensor === SENSORS["M"]) &&
                        <>
                            <div className="h-5/6 w-full">
                                <Datepicker
                                    primaryColor={"fuchsia"}
                                    useRange={false}
                                    asSingle={true}
                                    value={value}
                                    onChange={handleValueChange}
                                />
                                <CustomChart sensor={sensor}/>
                            </div>
                            <div className="h-5/6 w-full">
                                <CustomChart sensor={sensor}/>
                            </div>
                        </>
                    }
                </div>
                    <Link to="/"
                          className="inline-flex items-center ml-2 text-sm font-medium text-fuchsia-600 md:ml-2 dark:text-fuchsia-500 hover:underline">
                        <svg className="w-4 h-4 ml-1 text-fuchsia-600 dark:text-fuchsia-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                         Go Back
                    </Link>

            </div>
        </div>
    )

}
export default FullCardTemplate;
