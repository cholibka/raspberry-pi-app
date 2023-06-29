import CardTemplate from "../../Templates/CardTemplate";
import {useEffect, useState} from "react";
import {maxValue, minValue} from "../../helpers/functions";
import {SENSORS} from "../../constants";

function Pressure() {
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);

    useEffect(() => {
        minValue(SENSORS["P"])
            .then(r => setMin(r))

        maxValue(SENSORS["P"])
            .then(r => setMax(r))
    }, []);


    return (
        <CardTemplate sensor={SENSORS["P"]} min={min} max={max}/>
    );
}

export default Pressure;
