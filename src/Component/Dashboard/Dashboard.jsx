import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const marksArray = [
        {
            id: 1,
            name: "John",
            math: 90,
            physics: 85,
            chemistry: 95
        },
        {
            id: 2,
            name: "Emma",
            math: 80,
            physics: 90,
            chemistry: 75
        },
        {
            id: 3,
            name: "Michael",
            math: 95,
            physics: 80,
            chemistry: 85
        },
        {
            id: 4,
            name: "Olivia",
            math: 75,
            physics: 85,
            chemistry: 80
        },
        {
            id: 5,
            name: "William",
            math: 85,
            physics: 75,
            chemistry: 90
        },
        {
            id: 6,
            name: "Sophia",
            math: 90,
            physics: 95,
            chemistry: 85
        },
        {
            id: 7,
            name: "James",
            math: 80,
            physics: 75,
            chemistry: 70
        },
        {
            id: 8,
            name: "Isabella",
            math: 70,
            physics: 80,
            chemistry: 90
        },
        {
            id: 9,
            name: "Benjamin",
            math: 95,
            physics: 85,
            chemistry: 80
        },
        {
            id: 10,
            name: "Mia",
            math: 85,
            physics: 75,
            chemistry: 80
        },
        {
            id: 11,
            name: "David",
            math: 75,
            physics: 80,
            chemistry: 85
        },
        {
            id: 12,
            name: "Emily",
            math: 90,
            physics: 85,
            chemistry: 75
        }
    ];

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                
                <Line dataKey="physics"></Line>
                <Line stroke="#8884d8" dataKey="math"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;