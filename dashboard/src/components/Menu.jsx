import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [ifProfileDropDown, setProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  return (
    <div
      className="menu-container border-bottom bg-white sticky-top shadow-sm"
      style={{ zIndex: 100 }}
    >
      <div className="container d-flex justify-content-between align-items-center py-2 px-5">
        <div className="indices-container d-flex gap-4 small text-muted">
          <div className="nifty">
            <p className="mb-0">
              NIFTY 50 <span className="text-success">22,475.85 (+0.45%)</span>
            </p>
          </div>
          <div className="sensex">
            <p className="mb-0">
              SENSEX <span className="text-success">74,119.39 (+0.38%)</span>
            </p>
          </div>
        </div>

        <div className="nav-links d-flex align-items-center gap-4">
          <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
            <li className="nav-item">
              <Link
                className="nav-link p-0"
                to="/"
                onClick={() => handleMenuClick(0)}
              >
                <p
                  className={
                    selectedMenu === 0
                      ? "text-primary mb-0 fw-medium border-bottom border-primary border-2 pb-1"
                      : "mb-0 pb-1"
                  }
                >
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link p-0"
                to="/orders"
                onClick={() => handleMenuClick(1)}
              >
                <p
                  className={
                    selectedMenu === 1
                      ? "text-primary mb-0 fw-medium border-bottom border-primary border-2 pb-1"
                      : "mb-0 pb-1"
                  }
                >
                  Orders
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link p-0"
                to="/holdings"
                onClick={() => handleMenuClick(2)}
              >
                <p
                  className={
                    selectedMenu === 2
                      ? "text-primary mb-0 fw-medium border-bottom border-primary border-2 pb-1"
                      : "mb-0 pb-1"
                  }
                >
                  Holdings
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link p-0"
                to="/positions"
                onClick={() => handleMenuClick(3)}
              >
                <p
                  className={
                    selectedMenu === 3
                      ? "text-primary mb-0 fw-medium border-bottom border-primary border-2 pb-1"
                      : "mb-0 pb-1"
                  }
                >
                  Positions
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link p-0"
                to="/funds"
                onClick={() => handleMenuClick(4)}
              >
                <p
                  className={
                    selectedMenu === 4
                      ? "text-primary mb-0 fw-medium border-bottom border-primary border-2 pb-1"
                      : "mb-0 pb-1"
                  }
                >
                  Funds
                </p>
              </Link>
            </li>
          </ul>
          <div
            className="profile-section border-start ps-4 d-flex align-items-center gap-2"
            style={{ cursor: "pointer" }}
          >
            <div
              className="avatar bg-light rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "25px", height: "25px" }}
              onClick={() => setProfileDropDown(!ifProfileDropDown)}
            >
              <span
                className="small fw-bold text-muted"
                style={{ fontSize: "10px" }}
              >
                ZU
              </span>
            </div>
            <span
              className="small text-muted fw-medium"
              onClick={() => setProfileDropDown(!ifProfileDropDown)}
            >
              USERID
            </span>

            {ifProfileDropDown && (
              <div
                className="profile-dropdown shadow border rounded bg-white position-absolute p-3"
                style={{
                  top: "60px",
                  right: "50px",
                  width: "220px",
                  zIndex: 1000,
                }}
              >
                <div className="profile-info mb-3 border-bottom pb-2">
                  <h6 className="mb-0">User Name</h6>
                  <small className="text-muted">user@email.com</small>
                </div>
                <div className="dropdown-links d-flex flex-column gap-2">
                  <Link
                    to="/my-profile"
                    className="text-decoration-none text-dark small py-1"
                  >
                    <i className="fa fa-user me-2 text-muted"></i> My profile
                  </Link>
                  <Link
                    to="/settings"
                    className="text-decoration-none text-dark small py-1"
                  >
                    <i className="fa fa-cog me-2 text-muted"></i> Settings
                  </Link>
                  <Link
                    to="/console"
                    className="text-decoration-none text-dark small py-1"
                  >
                    <i className="fa fa-desktop me-2 text-muted"></i> Console
                  </Link>
                  <Link
                    to="/coin"
                    className="text-decoration-none text-dark small py-1"
                  >
                    <i className="fa fa-circle-o me-2 text-muted"></i> Coin
                  </Link>
                  <hr className="my-1" />
                  <a
                    href="#"
                    className="text-decoration-none text-dark small py-1"
                  >
                    <i className="fa fa-sign-out me-2 text-muted"></i> Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
