import React, {useEffect, useState} from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomizedAxisTick from "./CustomizedAxisTick";
import {mainViewChart} from "../../helpers/functions";
import {SENSORS} from "../../constants";

function CustomChart({sensor, date}) {
    const [data, setData] = useState([]);
    const [unit, setUnit] = useState(" hPa");
    const [dataKey, setDataKey] = useState("Pa");
    const colorTheme = localStorage.theme === "dark" ? "#1E313B" : "#FFFFFF";

    useEffect(() => {
        mainViewChart(sensor, date)
            .then(r => setData(r))

        if(sensor === SENSORS["T"])
        {
            setUnit(" °C")
            setDataKey("temp")
        }
    }, [sensor, date, colorTheme]);

    return (
        <ResponsiveContainer>
            <LineChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 10,
                    right: 20,
                    left: 20,
                    bottom: 10,
                }}
            >
                <XAxis dataKey="date" interval={0} height={60} tick={<CustomizedAxisTick />} stroke="grey"/>
                {(sensor === SENSORS["M"] || sensor === SENSORS["L"] ) &&
                    <>
                        <YAxis
                            style={{
                                fontSize: '0.8rem',
                                stroke: "grey",
                                fontWeight: 100
                            }}
                        />
                        <Line strokeWidth={1.3} dot={false} dataKey="detected" stroke="#d946ef" activeDot={{ r: 8 }}/>
                    </>
                }
                {(sensor === SENSORS["P"] || sensor === SENSORS["T"]) &&
                    <>
                        <YAxis unit={unit}
                               style={{
                                   fontSize: '0.8rem',
                                   stroke: "grey",
                                   fontWeight: 100
                               }}
                        />
                        <Line strokeWidth={1.3} dot={false} type="natural" dataKey={dataKey} stroke="#d946ef" activeDot={{ r: 8 }} unit={unit} name={sensor}/>
                    </>
                }
                <Legend/>
                <Tooltip contentStyle={{backgroundColor: "transparent"}} />
                <CartesianGrid strokeDasharray="3 3"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default CustomChart