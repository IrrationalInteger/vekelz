import "./App.css";
import Booking from "./components/Booking";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="content-wrapper">
          <Header></Header>
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/booking" element={<Booking />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
