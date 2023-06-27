import CardTemplate from "../../Templates/CardTemplate";
import {useEffect, useState} from "react";
import {maxValue, minValue} from "../../helpers/functions";
import {SENSORS} from "../../constants";

function Temperature() {
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);

    useEffect(() => {
        minValue(SENSORS["T"])
            .then(r => setMin(r))

        maxValue(SENSORS["T"])
            .then(r => setMax(r))
    }, []);


    return (
        <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8">
            <CardTemplate sensor={SENSORS["T"]} min={min} max={max}/>
        </div>
    )
}

export default Temperature;