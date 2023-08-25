import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const value = useSelector((s) => s.ProductReducer.cart);
  console.log(value);

  const style1 = {
    marginLeft: "0.5rem",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4">
            React Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/cart" className="btn btn-outline-dark" style={style1}>
                <i className="fa fa-shopping-cart me-2"></i> Cart (
                {value.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
