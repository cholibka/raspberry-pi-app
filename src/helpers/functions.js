import {BACKEND_SERVICE_URL, SENSORS} from "../constants";

const requestOptionsGet = {
    method: "GET",
};

const sortValue = (sensor) => {
    return sensor === SENSORS["P"] ? "Pa" : "temp"
}

export const mainViewChart = async(sensor) => {
    let arr = []

    await fetch(BACKEND_SERVICE_URL + sensor, requestOptionsGet)
        .then((response) => response.json())
        .then((result) => {
            result.forEach(element => {
                element.date = new Date(element.date).toLocaleString(
                    [],
                    {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
            });
            arr = result;
        })
        .catch((error) => console.log("error", error));

    return arr;
}

export const lastDetectedDate = async(sensor) => {

    let lastDate

    await fetch(BACKEND_SERVICE_URL + sensor + "?_sort=date&detected=1&_order=desc&_limit=1", requestOptionsGet)
        .then((response) => response.json())
        .then((result) => {
            lastDate = (new Date(result[0].date).toLocaleString(
                [],
                {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
            )
        })
        .catch((error) => console.log("error", error));

    return lastDate
}

export const minValue = async(sensor) => {

    let min

    await fetch(BACKEND_SERVICE_URL + sensor + "?_sort=" + sortValue(sensor) + "&_order=asc&_limit=1", requestOptionsGet)
        .then((response) => response.json())
        .then((result) => {
            min = sensor === SENSORS["P"] ? result[0].Pa + " hPa" : result[0].temp + " °C"
        })
        .catch((error) => console.log("error", error));

    return min;
}

export const maxValue = async(sensor) => {

    let max

    await fetch(BACKEND_SERVICE_URL + sensor + "?_sort=" + sortValue(sensor) + "&_order=desc&_limit=1", requestOptionsGet)
        .then((response) => response.json())
        .then((result) => {
            max = sensor === SENSORS["P"] ? result[0].Pa + " hPa" : result[0].temp + " °C"
        })
        .catch((error) => console.log("error", error));

    return max;
}