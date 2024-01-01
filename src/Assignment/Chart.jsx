import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {

    const data = [
        {
          name: 'Now',
          Humidity: 23,
        },
        {
          name: "11:00",
          Humidity: 29,
        },
        {
          name: "12:00",
          Humidity: 58,
        },
        {
          name: "13:00",
          Humidity: 75,
        },
        {
          name: "14:00",
          Humidity: 33,
        },
        {
          name: "15:00",
          Humidity: 20,
        },
        {
          name: "16:00",
          Humidity: 73,
        },
      ];

  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Humidity" stroke="#8884d8" fill="#3590F1" />
        </AreaChart>
      </ResponsiveContainer>
  )
}

export default Chart