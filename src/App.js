import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WebsiteClicks from "./components/WebsiteClicks";
import BestPerformingChart from "./components/BestPerformingChart";
import IndexingChart from "./components/IndexStatus";
import Tablesboard from "./components/Tablesboard";
import UnderPerformingChart from "./components/UnderPerformingChart";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", width:'auto'}}>
        <Sidebar />
        <div style={{ display: "flex", flexDirection: "column",gap:'20px', width:'100%' }}>
          <Header />
          <Tabs/>
          <WebsiteClicks />
          <div style={{ display: "flex", width: "95%", margin:'auto', gap:'20px' }}>
            <div style={{ display: "flex", width: "50%" }}>
              <BestPerformingChart title="Best Performing Pages"/>
            </div>
            <div style={{ display: "flex", width: "50%" }}>
              <UnderPerformingChart title="Under Performing Pages"/>
            </div>
          </div>
          <IndexingChart/>
          <Tablesboard/>
        </div>
      </div>
    </div>
  );
}

export default App;
