import React, {useEffect, useState} from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomizedAxisTick from "./CustomizedAxisTick";
import {mainViewChart} from "../../helpers/functions";
import {SENSORS} from "../../constants";

function LightChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        mainViewChart(SENSORS["L"])
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
                <YAxis
                    style={{
                        fontSize: '0.8rem',
                    }}
                />
                <Tooltip />
                <Line dataKey="detected" stroke="#EC4899" activeDot={{ r: 8 }}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LightChart