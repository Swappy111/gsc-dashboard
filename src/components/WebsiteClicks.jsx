import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./WebsiteClicks.css"; // Import CSS


const WebsiteClicks = () => {
  const [clicksData, setClicksData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gsc-backend.onrender.com/api/website-clicks")
      .then((response) => {
        setClicksData(
          response.data.filter(
            (data) => data.url === "https://example.com/page1"
          )
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="website-clicks-container">
      <div style={{display:"flex",alignItems:'start', justifyContent:"space-between"}}>
        <div>
          <h2 className="website-clicks-title">Total Website Clicks <i className="ri-information-line" style={{fontWeight:'normal', fontSize:'20px',color:'gray'}}></i></h2>
          <h1 className="website-clicks-total">
            {clicksData.reduce((sum, item) => sum + item.clicks, 0)}
          </h1>
        </div>
        <div>
          <select className="time-filter" style={{marginTop:'20px'}}>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
      </div>

      <div className="bar-chart-container">
        <ResponsiveContainer width={"100%"} height={300}>
          <BarChart data={clicksData}>
            <XAxis dataKey="month" />
            <YAxis
                        tick={{ fill: "#555", fontSize: 12 }} 
                        axisLine={false}  
                        tickLine={false} />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Bar
              dataKey="clicks"
              fill="#1f3b5a"
              barSize={20}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WebsiteClicks;
