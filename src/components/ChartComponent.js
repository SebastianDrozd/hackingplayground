import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {  XAxis, YAxis,ResponsiveContainer, AreaChart, Tooltip, Area } from 'recharts'
import { grabLineData } from '../utils/promises.js'
const ChartComponent = (props) => {
    const filteredMachines = props.completed
    const [isLoading, setIsloading] = useState(true)
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        grabLineData(filteredMachines).then(res => {
            setChartData(res)
            setIsloading(false)
        })
    }, [filteredMachines])
    if (isLoading) {
        return <h1 style={{ color: 'white' }}>Loading</h1>
    }
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={200}
                    height={60}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <Area type="monotone" dataKey="completed" stroke="#8884d8" fill="#C736F7" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer></>
    )
}

export default ChartComponent