import React, { useState } from "react";
import "./Sidebar.css";
import { BiChevronDown } from "react-icons/bi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <hr />

      {/* Sidebar Menu */}
      {/* <ul className="sidebar-menu">
        <li>
          <i className="ri-search-line"></i> Search
        </li>
        <li>
          <i className="ri-dashboard-line"></i> Dashboard
        </li>
        <li>
          <i className="ri-file-list-line"></i> Reports
        </li>
        <li>
          <i className="ri-line-chart-line"></i> Analytics
        </li>
        <li>
          <i className="ri-tools-line"></i> Tools
        </li>
        <li>
          <i className="ri-settings-3-line"></i> Settings
        </li>
        <li>
          <i className="ri-logout-box-line"></i> Logout
        </li>
      </ul> */}

      {navData.map((item, i) => (
        <details key={i} style={{ marginBottom: "4px" }}>
          <summary
            style={{
              display: "flex",
              padding: "4px 10px",
              alignItems: "center",
              justifyContent: item.data && "space-between",
            }}
          >
            <div>
              <span
                style={{
                  padding: "5px 10px",
                }}
              >
                <i className={`${item.icon}`}></i>
              </span>
              {isOpen ? <span style={{
                fontWeight:"600",
                color:"#35054d"
              }}>{item.title}</span>: null}
            </div>
            {item.data && isOpen && (
              <span
                style={{
                  padding: "0px",
                }}
              >
                <BiChevronDown style={{ fontSize: "20px" }} />
              </span>
            )}
          </summary>
          <ul
            style={{
              listStyleType: "none",
              width: "100%",
              paddingInlineStart: "50px",
              // gap: "0px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {item.data &&
              item.data.map((item, i) => (
                <li
                  key={i}
                  style={{
                    width: "100%",
                    justifyContent: "start",
                    display: "flex",
                    padding: "5px 20px",
                  }}
                >
                  {item.title}
                </li>
              ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default Sidebar;

const navData = [
  {
    title: "SEO",
    icon: "ri-search-line",
    data: [
      {
        title: "Keyword Ranking",
      },
      {
        title: "Onpage",
      },
      {
        title: "WebSite Audit",
      },
      {
        title: "Backlink",
      },
    ],
  },
  {
    title: "Social",
    icon: "ri-apps-line",
    data: [
      {
        title: "Facebook",
      },
      {
        title: "Instagram",
      },
      {
        title: "Planning",
      }
    ],
  },
  {
    title: "Paid Media",
    icon: "ri-megaphone-line",
    data: [
      {
        title: "Google Ads",
      },
      {
        title: "Meta Ads",
      }
    ],
  },
  {
    title: "Presentation",
    icon: "ri-presentation-line",
    data: [
      {
        title: "Google Analytics",
      },
      {
        title: "GSC",
      }
    ],
  },
  {
    title: "Tools",
    icon: "ri-robot-line",
    data: [
      {
        title: "Competitive Research",
      }
    ],
  },
  {
    title: "Bar Chart",
    icon: "ri-bar-chart-line",
  },
  {
    title: "Search File",
    icon: " ri-file-search-line",
  },
  {
    title: "Infinity",
    icon: "ri-infinity-line",
  },
  {
    title: "Bar Chart 2 ",
    icon: "ri-bar-chart-2-line",
  },
  {
    title: "Lock",
    icon: "ri-lock-line",
  },

  {
    title: "Mail",
    icon: "ri-mail-line",
  },
  {
    title: "User",
    icon: "ri-user-line",
  },
  {
    title: "Log out",
    icon: "ri-shut-down-line",
  },
];
