import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [startDate, setStartDate] = useState(new Date()); 
  const [endDate, setEndDate] = useState(new Date()); 



  return (
    <>
    <div className="header-container">
      <div className="site-info">
        <img src="/assets/Group 1000002313.png" alt="Logo" className="site-logo" />
        {/* <span className="site-name">Gbim.com</span> */}
      </div>

      <div className="title">
        {/* <span>Google Search Console</span> */}
        <img src="/assets/Frame 1000008628.png" alt="GSC Icon" className="gsc-icon" />
      </div>

      <div className="date-container">
        <fieldset>
          <legend >
                  Date
          </legend>
      <div className="date-picker">
      
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/dd/yyyy"
          className="date-input"
        />
        <span>-</span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="MM/dd/yyyy"
          className="date-input"
        />
        <FaRegCalendarAlt className="calendar-icon" />

        </div>
        </fieldset>
        <p className="last-days">Last 7 Days</p>
      </div>
    </div>
</>
  );
};

export default Header;
