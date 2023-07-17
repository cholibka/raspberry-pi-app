import {Link} from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";
import {useState} from "react";
import CustomChart from "../Pages/Charts/CustomChart";

function FullCardTemplate({sensor}) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleValueChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <div className="px-16 py-16 grid h-screen w-screen bg-white dark:bg-slate-800">
            <div className="container bg-gray-100 dark:bg-slate-900 dark:text-white/80 dark:border-slate-900 rounded-xl shadow border min-w-full p-8">
                <p className="text-3xl text-gray-600 font-bold mb-5 ark:text-white/70">
                    {capitalizeFirst(sensor)}: Details Info
                </p>


                <div className="w-full h-full">
                    <div className="h-5/6 w-full">
                        <Datepicker
                            primaryColor={"fuchsia"}
                            useRange={false}
                            asSingle={true}
                            value={value}
                            onChange={handleValueChange}
                            displayFormat={"DD.MM.YYYY"}
                        />
                       <CustomChart sensor={sensor} date={value}/>
                    </div>
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
