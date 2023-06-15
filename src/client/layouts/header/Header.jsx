import React from "react";
import vectorright from "../../../assets/images/topbar-vec-right.png";
import vectorleft from "../../../assets/images/topbar-vec-left.png";
import headerlogo from "../../../assets/images/header2-logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../../redux/slice/mobileMenuSidebarSlice";
const Header = () => {
  const redux = useSelector((state) => state.mobileSlice);
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <section className="top-bar three">
          <div className="container-lg container-fluid bg-white">
            <div className="row p-12 align-items-center position-relative">
              <div className="col-lg-5 col-md-6 d-flex align-items-center justify-content-md-start justify-content-center d-lg-flex d-md-none">
                <div className="vector-left">
                  <img src={vectorleft} alt="" />
                </div>
                <div className="welcome-note">
                  <p>
                    Welcome Our Restho Restaurant!{" "}
                    <NavLink to="reservation">For Private Event</NavLink>
                  </p>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 d-md-flex justify-content-lg-end justify-content-center align-items-center d-sm-flex  d-none">
                <div className="vector-right">
                  <img src={vectorright} alt="" />
                </div>
                <div className="contact-info">
                  <ul>
                    <li>
                      <a href="mailto:info@example.com">
                        <i className="bi bi-envelope"></i> info@example.com
                      </a>
                    </li>
                    <li>
                      <Link>
                        <i className="bi bi-geo-alt"></i>Road-01, Block-B, West
                        London City
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="header-area global-width style-3">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="head--bottom--left">
                <div className="header-logo">
                  <Link to="/">
                    <img alt="image" className="img-fluid" src={headerlogo} />
                  </Link>
                </div>
              </div>
              <div className="head--bottom--center">
                <div className="main-menu">
                  <ul className="menu-list">
                    <li>
                      <NavLink to="/"> Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="head--bottom--right">
                <ul>
                  <li>
                    <Link to="/login">
                      <span className="right--icon">
                        <i className="bi bi-person-circle" />
                      </span>
                      <span className="right--text">Login</span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/register">
                      <span className="right--icon">
                        {" "}
                        <i className="bi bi-r-circle" />
                      </span>
                      <span className="right--text">Register</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      style={{
                        position: "relative",
                      }}
                    >
                      <span className="cart--qty--icon">0</span>
                      <span className="right--icon">
                        <i className="bi bi-bag-heart" />
                      </span>

                      <span className="right--text"> Cart</span>
                    </Link>
                  </li>

                  <div
                    className="mobile--burgur--icon"
                    onClick={() => {
                      dispatch(toggleMenu());
                    }}
                  >
                    <i className="bi bi-text-indent-right"></i>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </header>

      <aside
        className={
          redux.toggleMenu
            ? "sidebar--menu--mobile show"
            : "sidebar--menu--mobile"
        }
      >
        <div className="sidebar--logo d-flex justify-content-between align-items-center">
          <img src={headerlogo} alt="" />
          <div
            className="clonse--sidebar--icon"
            onClick={() => {
              dispatch(toggleMenu());
            }}
          >
            <i className="bi bi-arrow-left"></i>
          </div>
        </div>
        <ul className="menu--list--for--mobile">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/">Demo</Link>
          </li>

          <li>
            <Link to="/">Not Found</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </aside>
      <div
        className={
          redux.toggleMenu
            ? "sidrbar--menu--overlay"
            : "sidrbar--menu--overlay hidden"
        }
        onClick={() => {
          dispatch(toggleMenu());
        }}
      ></div>
    </>
  );
};

export default Header;
