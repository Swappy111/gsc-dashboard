import React, { useState } from "react";
import "./Tabs.css";
import { RiDownload2Fill, RiDownload2Line, RiShareForwardLine, RiShutDownLine } from "react-icons/ri";

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
                    <RiDownload2Fill />
                    <span>Export</span>
                </button>
                <button className="button share-button">
                    <RiShareForwardLine />
                    <span>Share</span>
                </button>
                <button className="power-button">
                    <RiShutDownLine size={20} />
                </button>
            </div>
        </div>
    );
};

export default Tabs;
