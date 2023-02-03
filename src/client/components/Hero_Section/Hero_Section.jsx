import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

import "./Hero_Section.css";
import { Mousewheel, Pagination } from "swiper";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero__section global-width">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12">
            <div className="hero--section--left">
              <h4 className="categories--tab"> Categories </h4>
              <ul className="hero--section--category">
                <li>
                  <Link to="/travel-outdoor">
                    <i className="fa-solid fa-signs-post"></i>
                    <span>Travel & Outdoor</span>
                  </Link>
                </li>
                <li>
                  <Link to="/smart-phone">
                    <i className="fa-solid fa-mobile"></i>
                    <span>Smart Phones</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tv-audio">
                    <i className="fa-solid fa-tv"></i>
                    <span>TV & Audio</span>
                  </Link>
                </li>
                <li>
                  <Link className="active" to="/bag">
                    <i className="fa-solid fa-suitcase-rolling"></i>

                    <span>Backpack & Bag</span>
                  </Link>
                </li>
                <li>
                  <Link to="/musical-instrument">
                    <i className="fa-solid fa-music"></i>
                    <span>Musical Instruments</span>
                  </Link>
                </li>

                <li>
                  <Link to="/gift-ideas">
                    <i className="fa-solid fa-gift"></i>
                    <span>Gift Ideas</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper gr--slider"
            >
              {/* <SwiperSlide>
                <div className="hero__section__wrapp box--no--01">
                  <div className="hero__box ">
                    <h6 className="sub--title">New Arrivals</h6>
                    <h3 className="hero__section_title">
                      The New Way <br />
                      To Buy Furniture
                    </h3>
                    <p>Spring Collections 2019</p>
                    <button className="discover-btn">Discover Now</button>
                  </div>
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <div className="hero__section__wrapp box--no--02">
                  <div className="hero__box ">
                    <h6 className="sub--title">Hottest Deals</h6>
                    <h3 className="hero__section_title">
                      Wherever You Go
                      <br />
                      DJI Mavic 2 Pro
                    </h3>
                    <p>Spring Collections 2019</p>
                    <Link className="discover-btn" to="/shop">
                      Discover Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero__section__wrapp box--no--03">
                  <div className="hero__box ">
                    <h6 className="sub--title"> Limited Quantities </h6>
                    <h3 className="hero__section_title">
                      Refresh Your <br />
                      Wardrobe
                    </h3>
                    <p>Summer Collection 2019</p>
                    <Link className="discover-btn" to="/shop">
                      Discover Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
