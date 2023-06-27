let url = 'localhost';

if(process.env.API_URL) {
    url = process.env.API_URL;
}

export const BACKEND_SERVICE_URL =  'http://' + url + ':3030/';

export const SENSORS = {
    "T": "temperature",
    "P": "pressure",
    "M": "motion",
    "L": "light"
}