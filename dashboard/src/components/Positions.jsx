import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <div className="positions-container p-4">
      <h3 className="mb-4">Positions ({positions.length})</h3>
      <div className="table-responsive">
        <table className="table table-hover align-middle border">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos, index) => (
              <tr key={index}>
                <td><span className="badge bg-light text-muted border">{pos.product}</span></td>
                <td><strong>{pos.name}</strong></td>
                <td>{pos.qty}</td>
                <td>{pos.avg.toFixed(2)}</td>
                <td>{pos.price.toFixed(2)}</td>
                <td className={!pos.isLoss ? "text-success" : "text-danger"}>
                  {((pos.price - pos.avg) * pos.qty).toFixed(2)}
                </td>
                <td className={pos.day.startsWith("+") ? "text-success" : "text-danger"}>
                  {pos.day}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
