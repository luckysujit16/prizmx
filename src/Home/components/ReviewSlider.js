import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.module.css";
import styles from "../home.module.css";
import reviewV1 from "../assets/videos/review_russian.mp4";

const ReviewSlider = () => {
  return (
    <div className={styles.section}>
      <div className={styles.reviewContainer}>
        <div className="contianer">
          <div className="row px-5">
            <div className="col-lg-6 col-sm-12 col-xs-12 py-5">
              <div className={styles.reviewContent}>
                <span className={styles.title}>INTERNATIONAL REVIEWS</span>
                <p className={styles.featurebody}>
                  Labore nisi do ex mollit et fugiat est tempor cillum cillum
                  consequat elit quis. Reprehenderit sint id eu do Lorem. In
                  incididunt dolore ad quis nostrud laboris fugiat nostrud
                  aliquip esse id deserunt. Cillum proident duis eu culpa nisi
                  laboris nisi ad dolor tempor labore officia. Dolore laborum
                  cupidatat qui nostrud ipsum esse et dolore anim aliquip ipsum.
                  Dolor labore et mollit quis eu consectetur sit deserunt dolore
                  sit. Ad aliqua esse amet sit reprehenderit adipisicing qui sit
                  nostrud eiusmod ut eu.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 my-3">
              <div className={styles.reviewSlider}>
                <Carousel>
                  <Carousel.Item>
                    <iframe
                      src="https://www.youtube.com/embed/gr6NDDtuucY?si=a1Oreyr8JeCwYY7e"
                      frameborder="0"
                      allowfullscreen
                      title="video"
                      className={styles.video}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <iframe
                      src="https://www.youtube.com/embed/gr6NDDtuucY?si=a1Oreyr8JeCwYY7e"
                      frameborder="0"
                      allowfullscreen
                      title="video"
                      className={styles.video}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
