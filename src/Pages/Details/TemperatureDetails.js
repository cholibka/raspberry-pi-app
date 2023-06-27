import FullCardTemplate from "../../Templates/FullCardTemplate";
import {SENSORS} from "../../constants";

function TemperatureDetails() {
    return(
       <FullCardTemplate sensor={SENSORS["T"]}/>
    )
}

export default TemperatureDetails;