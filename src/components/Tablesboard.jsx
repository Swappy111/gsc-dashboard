import React from "react";
import "./Tablesboard.css";

const improvementsData = [
  { type: "Breadcrumbs", valid: 77, invalid: 0 },
  { type: "FAQ", valid: 4, invalid: 0 },
  { type: "Review Snippet", valid: 33, invalid: 0 },
  { type: "Sitelink Checkbox", valid: 40, invalid: 0 }
];

const topOpportunityKeywords = [
  { keyword: "Dog Food", impressions: "30k", clicks: "20,133", ctr: "12%" },
  { keyword: "Cat Food", impressions: "20k", clicks: "30,000", ctr: "15%" },
  { keyword: "Bird Food", impressions: "5k", clicks: "35,135", ctr: "20%" }
];

const slowGrowthKeywords = [
  { keyword: "Food", impressions: "100", clicks: "1", ctr: "2%" },
  { keyword: "Rabbit Food", impressions: "150", clicks: "2", ctr: "3%" },
  { keyword: "Bird Food", impressions: "120", clicks: "3", ctr: "4%" }
];

const DataTable = ({ title, data, columns }) => {
  return (
    <div className="table-container">
      <h3>{title} <i className="ri-information-line" style={{fontWeight:'normal', fontSize:'20px',color:'gray'}}></i> </h3>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{row[col.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Tablesboard = () => {
  return (
    <div className="dashboard">
      <DataTable
        title="Improvements in Website"
        data={improvementsData}
        columns={["Type", "Valid", "Invalid"]}
      />
      <DataTable
        title="Top Opportunity Keywords"
        data={topOpportunityKeywords}
        columns={["Keyword", "Impressions", "Clicks", "CTR"]}
      />
      <DataTable
        title="Slow-Growth Opportunity Keyword"
        data={slowGrowthKeywords}
        columns={["Keyword", "Impressions", "Clicks", "CTR"]}
      />
    </div>
  );
};

export default Tablesboard;
