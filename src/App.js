import "./App.css";
import Booking from "./pages/booking";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/sidebar";
import Header from "./layouts/header";

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
