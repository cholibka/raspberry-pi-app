import React, {useEffect, useState} from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomizedAxisTick from "./CustomizedAxisTick";
import {mainViewChart} from "../../helpers/functions";
import {SENSORS} from "../../constants";

function PressureChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        mainViewChart(SENSORS["P"])
            .then(r => setData(r))
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
                <YAxis unit=" hPa"
                       style={{
                            fontSize: '0.8rem',
                       }}
                />
                <Tooltip />
                <Line type="natural" dataKey="Pa" stroke="#EC4899" activeDot={{ r: 8 }} unit=" hPa" name={SENSORS["P"]}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default PressureChart