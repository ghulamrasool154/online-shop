import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

import "./Hero_Section.css";
import { Mousewheel, Pagination } from "swiper";
const HeroSection = () => {
  return (
    <div className="hero__section">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="hero--section--left">
              <div className="left--top">top</div>
              <div className="left--bottom">bottom</div>
            </div>
          </div>
          <div className="col-lg-9 col-md-4">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero__section__image">
                  <h5> Slide 1 </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam saepe debitis corrupti asperiores deleniti labore
                    provident, quisquam velit dolore eius optio ex consequatur
                    est cupiditate, explicabo fugit culpa! Alias, eius.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero__section__image">
                  <h5> Slide 2 </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam saepe debitis corrupti asperiores deleniti labore
                    provident, quisquam velit dolore eius optio ex consequatur
                    est cupiditate, explicabo fugit culpa! Alias, eius.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero__section__image">
                  <h5> Slide 3 </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam saepe debitis corrupti asperiores deleniti labore
                    provident, quisquam velit dolore eius optio ex consequatur
                    est cupiditate, explicabo fugit culpa! Alias, eius.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero__section__image">
                  <h5> Slide 4 </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam saepe debitis corrupti asperiores deleniti labore
                    provident, quisquam velit dolore eius optio ex consequatur
                    est cupiditate, explicabo fugit culpa! Alias, eius.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero__section__image">
                  <h5> Slide 5 </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam saepe debitis corrupti asperiores deleniti labore
                    provident, quisquam velit dolore eius optio ex consequatur
                    est cupiditate, explicabo fugit culpa! Alias, eius.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    // <section id="hero">
    //   <div className="container-xxl">
    //     <div className="row">
    //       <div className="col">
    //         <h4 className="offer">Trade-in-offer</h4>
    //         <h2 className="deal">Super Value deals</h2>
    //         <h1 className="main-title">On all products</h1>
    //         <p className="p">Save more with coupons &amp; up to 70% off!</p>
    //         <a href="/shop" className="shop-now">
    //           Shop Now
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;
