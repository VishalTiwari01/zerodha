import React, { useState } from "react";
import { FaChartBar, FaListUl, FaTrashAlt, FaEllipsisH } from "react-icons/fa";
import { watchlist } from "../data/data";
import {Tooltip } from "@mui/material";

const Watchlist = () => {
  return (
    <div className="watchlist-sidebar border-end bg-white sticky-top" style={{ top: '56px', width: '350px' }}>
      <div className="p-3 border-bottom">
        <input className="form-control form-control-sm border-0 bg-light" placeholder="Search eg: infy bse, nifty fut" />
      </div>
      <div className="list-group list-group-flush">
        {watchlist.map((stock, i) => (
          <WatchlistItem stock={stock} key={i} />
        ))}
      </div>
    </div>
  );
};

const WatchlistItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div 
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3 position-relative"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      style={{ cursor: 'pointer', minHeight: '65px' }}
    >
      <span className={!stock.isDown ? "text-success fw-medium" : "text-danger fw-medium"}>
        {stock.name}
      </span>

      {showActions ? (
        <div className="action-bar d-flex gap-2 bg-white ps-2 position-absolute end-0 pe-3" style={{ zIndex: 10 }}>
          <button className="btn btn-primary btn-sm rounded-0 fw-bold px-2 py-0" style={{ fontSize: '8px', backgroundColor: '#387ed1' }}>Buy</button>
          <button className="btn btn-danger btn-sm rounded-0 fw-bold px-2 py-0" style={{ fontSize: '8px', backgroundColor: '#ff5722', border: 'none' }}>Sell</button>
          <button className="btn btn-light btn-sm rounded-0 p-1 border"><FaChartBar size={14} className="text-muted" /></button>
          <button className="btn btn-light btn-sm rounded-0 p-1 border"><FaEllipsisH size={14} className="text-muted" /></button>
        </div>
      ) : (
        <div className="text-end">
          <div className={!stock.isDown ? "text-success" : "text-danger"}>{stock.price.toFixed(2)}</div>
          <small className="text-muted">{stock.percent}</small>
        </div>
      )}
    </div>
  );
};

export default Watchlist;

const WatchlistActions = () => {
  return (
    <Tooltip title="Buy (B)" placement="top" arrow>
      <button className="btn btn-primary btn-sm rounded-0 fw-bold px-2 py-0" style={{ fontSize: '12px', backgroundColor: '#387ed1' }}>Buy</button>
    </Tooltip>
  )
}
