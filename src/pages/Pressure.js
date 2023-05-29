import CardTemplate from "../Templates/CardTemplate";
import {useEffect, useState} from "react";

function Pressure() {
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const getMin = () => {
        const requestOptions = {
            method: "GET",
        };

        fetch("http://localhost:3030/pressure?_sort=Pa&_order=asc&_limit=1", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setMin(result[0].Pa + " hPa")
            })
            .catch((error) => console.log("error", error));
    };

    const getMax = () => {
        const requestOptions = {
            method: "GET",
        };

        fetch("http://localhost:3030/pressure?_sort=Pa&_order=desc&_limit=1", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setMax(result[0].Pa + " hPa")
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getMin();
        getMax();
    }, []);



    return (
        <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8">
           <CardTemplate sensor={"pressure"} min={min} max={max}/>
        </div>
    );
}

export default Pressure;
