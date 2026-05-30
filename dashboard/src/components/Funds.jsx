import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Funds = () => {
  return (
    <div className="funds-container p-4">
      <div className="row">
        <div className="col-md-6 border-end">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>Equity</h4>
            <div>
              <button className="btn btn-primary me-2"><FaPlus /> Add Funds</button>
              <button className="btn btn-outline-primary"><FaMinus /> Withdraw</button>
            </div>
          </div>
          <div className="d-flex justify-content-between border-bottom py-3">
            <span>Available margin</span>
            <span className="fw-bold fs-4 text-primary">1,25,000.00</span>
          </div>
          <div className="d-flex justify-content-between py-2 mt-3">
            <span>Used margin</span>
            <span>0.00</span>
          </div>
          <div className="d-flex justify-content-between py-2">
            <span>Available cash</span>
            <span>1,25,000.00</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between py-2">
            <span>Opening balance</span>
            <span>1,25,000.00</span>
          </div>
        </div>
        <div className="col-md-6 px-4">
          <h4 className="mb-4">Commodity</h4>
          <div className="alert alert-light border text-center p-5">
            <p className="text-muted">You don't have a commodity account</p>
            <button className="btn btn-primary">Activate Commodity</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
