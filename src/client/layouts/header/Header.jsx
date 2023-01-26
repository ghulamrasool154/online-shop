import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <section className="top--header">
        <div className="container-xxl top--header">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <Link className="top--left" to="/">
                <img src={logo} alt="online-shop" />
                <h3 className="logo--title"> online shop</h3>
              </Link>
            </div>
            <div className="col-lg-6 text-md-center">
              <div className="top--center">
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search for product"
                />
                <button className="search--btn">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="top--right">
                <ul className="d-flex nav--right justify-content-end">
                  <li>
                    <NavLink to="/login">
                      <i className="fa-solid fa-user-nurse"></i>
                      <span>Login</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sign-up">
                      <i className="fa-solid fa-user-nurse"></i>
                      <span>sign up</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" className="cart ">
                      <i className="fa-solid fa-basket-shopping"></i>
                      <span className="qty--header">0</span>
                      <span>Cart</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom--header">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="show--categories">
                <a> show by categories</a>
              </div>
            </div>
            <div className="col-9">
              <nav className="main--nav">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li>
                    <NavLink to="/about">about </NavLink>
                  </li>

                  <li>
                    <NavLink to="/contact">contact</NavLink>
                  </li>

                  <li>
                    <NavLink to="/shop">shop</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
