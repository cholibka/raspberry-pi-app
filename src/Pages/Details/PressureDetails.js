import FullCardTemplate from "../../Templates/FullCardTemplate";
import {SENSORS} from "../../constants";

function PressureDetails() {
    return(
        <FullCardTemplate sensor={SENSORS["P"]}/>
    )
 }

 export default PressureDetails;