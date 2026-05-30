import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders-container p-5 text-center">
      <div className="no-orders p-5 mt-5">
        <p className="text-muted fs-5">You haven't placed any orders today</p>
        <Link to="/" className="btn btn-primary mt-3 px-4">Get started</Link>
      </div>
    </div>
  );
};

export default Orders;
