import React from "react";
import "./feature.css";
const FeatureProduct = () => {
  return (
    <div className="feature">
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <div className="d-flex">
              {[1, 2, 3, 4].map(() => {
                return (
                  <div class="item-product">
                    <img src="/img/products/f3.jpg" alt="" />
                    <div class="des">
                      <span>Adidas</span>
                      <h5>Cartoon Astronaut T-Shirt</h5>
                      <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h4>$78</h4>
                    </div>
                    <a href="#">
                      <i class="fal fa-shopping-cart cart"></i>
                    </a>
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
