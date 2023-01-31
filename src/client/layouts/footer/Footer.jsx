import React from "react";
import "./Footer.css";
import logo from "../../../assets/images/footer-logo.svg";
const Footer = () => {
  return (
    <footer>
      <section className="footer-top global-width">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="footer-logo">
                <img src={logo} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>
                <ul className="footer-social">
                  <li>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="footer-center">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <a href=""> Home</a>
                  </li>
                  <li>
                    <a href=""> About</a>
                  </li>
                  <li>
                    <a href=""> Rooms</a>
                  </li>
                  <li>
                    <a href=""> staff</a>
                  </li>
                  <li>
                    <a href=""> Dinning</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="footer-right-side">
                <h3>Address Info</h3>
                <ul>
                  <li>
                    <i className="bi bi-telephone-inbound"></i>
                    <a href="">03457753091</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-open-heart"></i>
                    <a href="">testing@yahoo.com</a>
                  </li>

                  <li>
                    <i className="bi bi-geo-alt"></i>
                    <a href="">Civil Lines Fsd</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer--bottom global-width">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-md-6 col-sm-6">
              <div className="copyright-area">
                <p>
                  @Copyright by <a href="#">Egenslab</a>-2022, All Right
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6  text-end">
              <div className="privacy-policy">
                <p>
                  <a href="#">Privacy &amp; Policy</a>
                  <br className="hiddenclass" />
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
