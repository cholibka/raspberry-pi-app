import React, {useEffect, useState} from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomizedAxisTick from "./CustomizedAxisTick";

function TempChart() {
    const [data, setData] = useState([]);

    const getData = () => {
        const requestOptions = {
            method: "GET",
        };

        fetch("http://localhost:3030/temperature", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                result.forEach(element => {
                    element.date = new Date(element.date).toLocaleString(
                        [],
                        {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
                });
                setData(result)

            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" interval={0} height={60} tick={<CustomizedAxisTick />} />
                <YAxis unit=" °C"
                       style={{
                           fontSize: '0.8rem',
                       }}
                />
                <Tooltip />
                <Line type="natural" dataKey="temp" stroke="#EC4899" activeDot={{ r: 8 }} unit=" °C" name="temperature"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default TempChart