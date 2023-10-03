import React, { useEffect, useState } from 'react';
import { LineChart as LChart, Line,XAxis,YAxis,Tooltip, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const [cards, setCards]= useState([]);


    useEffect(() =>{
        fetch('people.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])




    return (
        <div>
          <LChart width={900} height={400} data={cards}>
            <XAxis dataKey='title'></XAxis>
            <Tooltip></Tooltip>
            <Line dataKey="price"></Line>
          </LChart>

            <PieChart width={600} height={400}>
        
             <Pie dataKey='price'
             
             data={cards}
             fill='#8884d8'
             cx="50%"
            cy="50%">

           <XAxis dataKey='title'></XAxis>
            </Pie>

            </PieChart>
        </div>
    );
};


export default Statistics;

