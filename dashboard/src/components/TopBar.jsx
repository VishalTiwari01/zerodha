import React from "react";

const TopBar = () => {
  return (
    <div className="topbar-container border-bottom bg-white py-2 px-4 sticky-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="indices d-flex gap-5">
          <div className="nifty d-flex align-items-center gap-2">
            <span className="small fw-medium">NIFTY 50</span>
            <span className="small text-success fw-bold">22,475.85</span>
            <span className="small text-success" style={{ fontSize: '0.75rem' }}>+102.10 (0.45%)</span>
          </div>
          <div className="sensex d-flex align-items-center gap-2">
            <span className="small fw-medium">SENSEX</span>
            <span className="small text-success fw-bold">74,119.39</span>
            <span className="small text-success" style={{ fontSize: '0.75rem' }}>+280.15 (0.38%)</span>
          </div>
        </div>
        
        <div className="user-nav d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
            <div className="avatar-small bg-light rounded-circle text-muted d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px', fontSize: '10px' }}>
              ZU
            </div>
            <span className="small text-muted fw-medium">USERID</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
