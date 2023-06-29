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
        <CardTemplate sensor={SENSORS["T"]} min={min} max={max}/>
    )
}

export default Temperature;