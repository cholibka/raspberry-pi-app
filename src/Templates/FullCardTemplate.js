import {Link} from "react-router-dom";

function FullCardTemplate({sensor}) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="px-16 py-16 grid h-screen w-screen">
            <div className="container bg-gray-100 rounded-xl shadow border min-w-full p-8">
                <p className="text-3xl text-gray-600 font-bold mb-5">
                    {capitalizeFirst(sensor)}
                </p>
                <Link to="/"
                      className="inline-flex items-center ml-2 text-sm font-medium text-pink-600 md:ml-2 dark:text-pink-500 hover:underline">
                    <svg className="w-4 h-4 ml-1 text-pink-600 dark:text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
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
