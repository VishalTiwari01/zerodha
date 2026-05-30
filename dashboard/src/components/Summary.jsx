import React from "react";

const Summary = () => {
  return (
    <div className="summary-container p-4">
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-3">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="fa fa-pie-chart text-primary"></i>
              </div>
              <h5 className="mb-0 text-muted">Equity</h5>
            </div>
            <hr className="my-3 opacity-50" />
            <div className="row align-items-center mt-4">
              <div className="col-6 text-center border-end">
                <h2 className="mb-1 fw-bold">1.25L</h2>
                <small className="text-muted">Margin available</small>
              </div>
              <div className="col-6 ps-4">
                <p className="mb-2 d-flex justify-content-between">
                  <small className="text-muted">Used margin</small> <strong>0</strong>
                </p>
                <p className="mb-0 d-flex justify-content-between">
                  <small className="text-muted">Opening balance</small> <strong>1.25L</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-3">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                <i className="fa fa-briefcase text-success"></i>
              </div>
              <h5 className="mb-0 text-muted">Holdings (4)</h5>
            </div>
            <hr className="my-3 opacity-50" />
            <div className="row align-items-center mt-4">
              <div className="col-6 text-center border-end">
                <h2 className="mb-1 fw-bold text-success">12.4k</h2>
                <small className="text-muted">P&L</small>
              </div>
              <div className="col-6 ps-4">
                <p className="mb-2 d-flex justify-content-between">
                  <small className="text-muted">Current value</small> <strong>1.05L</strong>
                </p>
                <p className="mb-0 d-flex justify-content-between">
                  <small className="text-muted">Investment</small> <strong>92.6k</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
