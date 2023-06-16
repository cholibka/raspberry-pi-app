import CardTemplate from "../Templates/CardTemplate";
import {useEffect, useState} from "react";
import {BACKEND_SERVICE_URL} from "../constants";

function Light() {
    const [max, setMax] = useState(null);
    const getMax = () => {
        const requestOptions = {
            method: "GET",
        };

        fetch(BACKEND_SERVICE_URL + "light?_sort=date&detected=1&_order=desc&_limit=1", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setMax(new Date(result[0].date).toLocaleString(
                    [],
                    {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
                )
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getMax();
    }, []);

    return (
        <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8">
            <CardTemplate sensor={"light"} max={max}/>
        </div>
    );
}

export default Light;
