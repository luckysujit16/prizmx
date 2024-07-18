import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.module.css";
import "../home.module.css";
import reviewV1 from "../assets/videos/review_russian.mp4";

const ReviewSlider = () => {
  return (
    <div className="container my-5">
      <div className="reviewContainer">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="reviewContent">
              <h1>Отзывы</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="reviewSlider">
              <Carousel>
                <Carousel.Item>
                  <video
                    src={reviewV1}
                    width="600"
                    height="300"
                    controls="controls"
                    autoplay="false"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
