import React from "react";
import "./Navbar.css";
import { RiAppsLine } from "react-icons/ri";
import { FaCrown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h2 className="logo">
            DM <span>Cockpit</span><br />
          <div className="tagline" style={{ display:"flex", alignItems:'center', gap:'2px',color:"#3d0240"}}><span style={{width: "10px" , height: '2px', backgroundColor:'#3d0240'}}></span>FUEL YOUR DIGITAL MARKETING GROWTH!<span style={{width: "15px" , height: '2px', backgroundColor:'#3d0240'}}></span></div>
          </h2>
        </div>
        <div style={{ width:'65%'}}>
          <div className="navbar-menu">
            <ul className="menu-items">
              <li className="projects-item active">
                <i className="ri-apps-fill"></i>All Projects
              </li>
              <li><i className="ri-key-2-fill"></i>Keyword Research</li>
              <li><i className="ri-bar-chart-2-fill"></i> Competitive Research</li>
              <li><i className="ri-file-text-line"></i>Website Audit</li>
              <li><i className="ri-file-search-line"></i> DM Captain Enterprise</li>
            </ul>
          </div>
        </div>

        {/* Center - Menu */}

        {/* Right Side - Profile & Plan */}
        <div className="navbar-right">
          <button className="plan-btn">
            <FaCrown className="crown-icon" /> My Plan
          </button>
          <div className="profile">
            <div className="profile-pic"></div>
            <div className="profile-info">
              <strong>John Doe ⌄</strong>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
