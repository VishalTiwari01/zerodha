import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="d-flex">
        <Watchlist />
        <div className="flex-grow-1 main-content bg-light">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
