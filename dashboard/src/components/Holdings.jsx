import React from "react";
import { holdings } from "../data/data";

const Holdings = () => {
  return (
    <div className="holdings-container p-4">
      <h3 className="mb-4">Holdings ({holdings.length})</h3>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => (
              <tr key={index}>
                <td><strong>{stock.name}</strong></td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{(stock.qty * stock.price).toFixed(2)}</td>
                <td className={stock.price >= stock.avg ? "text-success" : "text-danger"}>
                  {((stock.price - stock.avg) * stock.qty).toFixed(2)}
                </td>
                <td className={stock.net.startsWith("+") ? "text-success" : "text-danger"}>
                  {stock.net}
                </td>
                <td className={stock.day.startsWith("+") ? "text-success" : "text-danger"}>
                  {stock.day}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holdings;
