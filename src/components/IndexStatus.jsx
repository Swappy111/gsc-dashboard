import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const IndexingChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gsc-backend.onrender.com/api/website-clicks")
      .then((response) => {
        const transformedData = response.data.filter((item)=>item.url === "https://example.com/page1").slice(0, 12).map((item) => ({
          ...item,
          indexed: item.clicks,
          notIndexed: item.clicks + Math.floor(Math.random() * 100),
        }));
        setData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          width: "95%",
          margin: "auto",
          padding: "20px 0px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 20px",
          }}
        >
          <h2 style={{ padding: "0px 20px",fontSize:"20px" }}>
            Indexing Status{" "}
            <i
              className="ri-information-line"
              style={{ fontWeight: "normal", fontSize: "20px", color: "gray" }}
            ></i>
          </h2>
          
          <select className="time-filter" style={{ height: "fit-content" }}>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis
              tick={{ fill: "#555", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />
            <Legend
              iconType="circle"
              formatter={(value) =>
                value === "indexed" ? "50 Pages Indexed" : "0 Pages Indexed"
              }
            />

            <ReferenceLine x="May" stroke="red" strokeDasharray="4 4" />

            <Line
              type="linear"
              dataKey="indexed"
              stroke="#2d1136"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="linear"
              dataKey="notIndexed"
              stroke="#6581ea"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default IndexingChart;
