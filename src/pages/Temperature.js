import CardTemplate from "../Templates/CardTemplate";
import {useEffect, useState} from "react";

function Temperature() {
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const getMin = () => {
        const requestOptions = {
            method: "GET",
        };

        fetch("http://localhost:3030/temperature?_sort=temp&_order=asc&_limit=1", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setMin(result[0].temp + " °C")
            })
            .catch((error) => console.log("error", error));
    };

    const getMax = () => {
        const requestOptions = {
            method: "GET",
        };

        fetch("http://localhost:3030/temperature?_sort=temp&_order=desc&_limit=1", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setMax(result[0].temp + " °C")
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getMin();
        getMax();
    }, []);


    return (
        <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8">
            <CardTemplate sensor={"temperature"} min={min} max={max}/>
        </div>
    )
}

export default Temperature;