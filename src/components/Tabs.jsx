import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = ["Overview", "Performance Monitoring", "Indexing", "Core Web Vitals", "Site Health"];

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="buttons">
                <button className="button export-button">
                <i class="ri-download-fill"></i>
                    <span>Export</span>
                </button>
                <button className="button share-button">
                    <i class="ri-share-fill"></i><span>Share</span>
                </button>
                <button className="power-button">
                    <i class="ri-shut-down-line" style={{fontSize:"20px"}}></i>
                </button>
            </div>
        </div>
    );
};

export default Tabs;
