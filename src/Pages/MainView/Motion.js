import CardTemplate from "../../Templates/CardTemplate";
import {useEffect, useState} from "react";
import {lastDetectedDate} from "../../helpers/functions";
import {SENSORS} from "../../constants";

function Motion() {
    const [max, setMax] = useState(null);

    useEffect(() => {
        lastDetectedDate(SENSORS["M"])
            .then(r => setMax(r))
    }, []);

    return (
        <CardTemplate sensor={SENSORS["M"]} max={max}/>
    );
}

export default Motion;
