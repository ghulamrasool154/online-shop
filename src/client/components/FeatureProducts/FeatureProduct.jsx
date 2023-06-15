import React from "react";
import "./feature.css";
import img1 from "../../../assets/images/color-logo.png";
const FeatureProduct = () => {
  return (
    <div className="feature">
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              {[1, 2, 3, 4].map(() => {
                return (
                  <div class="item-product">
                    <div className="img-detail">
                      <img src={img1} alt="" className="img-fluid" />
                    </div>
                    <div class="descriptin">
                      <h5>Cartoon Astronaut T-Shirt</h5>
                      <h4>$78</h4>
                    </div>
                    <div>
                      <a href="/proudct-detail/11">view more</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
