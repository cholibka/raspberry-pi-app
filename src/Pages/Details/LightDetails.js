import FullCardTemplate from "../../Templates/FullCardTemplate";
import {SENSORS} from "../../constants";

function LightDetails() {
    return(
        <FullCardTemplate sensor={SENSORS["L"]}/>
    )
}

export default LightDetails;