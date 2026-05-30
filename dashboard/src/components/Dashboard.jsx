import React from "react";
import Summary from "./Summary";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="p-4 border-bottom bg-white">
        <h4 className="mb-0">Hi, User!</h4>
      </div>
      <Summary />
      {/* Additional dashboard sections like charts could go here */}
    </div>
  );
};

export default Dashboard;
