import CardTemplate from "../../Templates/CardTemplate";
import {useEffect, useState} from "react";
import {lastDetectedDate} from "../../helpers/functions";
import {SENSORS} from "../../constants";

function Light() {
    const [max, setMax] = useState(null);

    useEffect(() => {
        lastDetectedDate(SENSORS["L"])
            .then(r => setMax(r))
    }, []);

    return (
        <CardTemplate sensor={SENSORS["L"]} max={max}/>
    );
}

export default Light;
