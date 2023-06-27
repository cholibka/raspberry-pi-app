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
        <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8">
            <CardTemplate sensor={SENSORS["L"]} max={max}/>
        </div>
    );
}

export default Light;
