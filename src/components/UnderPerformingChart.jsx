import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./BestPerformingChart.css";
import axios from "axios";

const colors = [
  "#c23a22",
  "#f8858b",
  "#e54c38",
  "#fdaaaa",
  "#ff6663",
];

const UnderPerformingChart = ({title}) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://gsc-backend.onrender.com/api/website-clicks")
      .then((response) => {
        setdata(response.data.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="chart-container">
        <div style={{display:'flex', justifyContent:'space-between'}}>
      <h2 className="chart-title">{title} <i className="ri-information-line" style={{fontWeight:'normal', fontSize:'20px',color:'gray'}}></i></h2>
      <button className="view-more">View more</button>
        </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="clicks"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              cornerRadius={5}
              fill="#8884d8"
              paddingAngle={3}
              label={({ url, clicks }) => `${url.substring(0, 100)}-(${clicks})`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UnderPerformingChart;
