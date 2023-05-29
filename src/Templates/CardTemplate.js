function CardTemplate({sensor}) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
            <a href={sensor}
               className="float-right inline-flex items-center ml-2 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline">
                Show more
                <svg className="w-4 h-4 ml-1 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                </svg>
            </a>
            <p className="text-3xl text-gray-700 font-bold mb-5">
                {capitalizeFirst(sensor)}
            </p>
            <div className="flex flex-row h-full w-full">
                <div className="bg-red-400 h-5/6 w-4/5 p-8">
                    <p>
                        Tu wykres 📊📉📈
                    </p>
                </div>
                    <div className="h-1/6 w-1/5 p-2 text-center flex flex-col items-center">
                    {(sensor === "pressure" || sensor === "temperature" ) &&
                        <>
                            <p className="text-sm font-normal flex flex-col items-center p-2">
                                Max
                                <span className="text-base font-medium">
                                    73
                                </span>
                            </p>
                            <p className="text-sm font-normal flex flex-col items-center">
                                Min
                                <span className="text-base font-medium">
                                    7356
                                </span>
                            </p>
                        </>
                    }
                    {(sensor === "motion" || sensor === "light" ) &&
                        <>
                            <p className="text-sm font-normal flex flex-col items-center p-2">
                                Last detected
                                <span className="text-base font-medium">
                                    DATA 📅⏰
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