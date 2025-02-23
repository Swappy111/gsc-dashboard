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
    title: "Meta",
    icon: "ri-meta-fill",
  },
  {
    title: "Bar Chart 2 ",
    icon: "ri-numbers-line",
  },
  {
    title: "Info",
    icon: "ri-info-card-line",
  },
  {
    title: "Wallet",
    icon: "ri-wallet-3-line",
  },

  {
    title: "Robot",
    icon: "ri-robot-2-line",
  },
  {
    title: "Log out",
    icon: "ri-shut-down-line",
  },
];
