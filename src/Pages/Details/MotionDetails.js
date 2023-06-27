import FullCardTemplate from "../../Templates/FullCardTemplate";
import {SENSORS} from "../../constants";

function MotionDetails() {
    return(
        <FullCardTemplate sensor={SENSORS["M"]}/>
    )
}

export default MotionDetails;