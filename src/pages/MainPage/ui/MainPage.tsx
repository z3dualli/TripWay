import { Col, Row } from "antd";
import styles from "./MainPage.module.scss";
import { useEffect, useState } from "react";
import type { TourType } from "../types/type";
import { getTours } from "../service/service";
import { NavLink } from "react-router-dom";
import arrow from "../../../assets/icons/dot-arrow-right.svg";
import watchIcon from "../../../assets/icons/youtube.svg";

const MainPage = () => {
  const [tours, setTours] = useState<TourType[]>([]);

  useEffect(() => {
    getTours().then((res) => setTours(res.data));
  }, []);

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <img src="/public/1256e653-dfd0-43bb-9835-bcd236fc437f.png" alt="1"/>
          <Row className={styles.heroContent}>
            <Col span={12}>
              <div className={styles.heroText}>
                <h3 className={styles.greenTitle}>EXPLORE THE WORLD</h3>
                <h1 className={styles.heroTitle}>Adventure Awaits</h1>
                <p>
                  Discover breathtaking destinations and <br /> unforgettable
                  experiences with our
                  <br /> handcrafted nature tours.
                </p>

                <Row gutter={20}>
                  <Col>
                    <NavLink to={"/alltours"}>
                      <button className={styles.exploreBut}>
                        Explore Tours
                        <img src={arrow} alt="" />
                      </button>
                    </NavLink>
                  </Col>
                  <Col className={styles.watch}>
                    <button className={styles.WatchBut}>
                      Watch Video
                      <img src={watchIcon} alt="" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.heroCards}>
                <div className={styles.cardLeft}>
                  <img src="public\nat-4.jpg" alt="" />

                  <div className={styles.cardInfo}>
                    <h4>Forest Trails</h4>
                    <p>
                      Push your limits and conquer <br />
                      breathtaking mountain peaks with experienced guides.
                    </p>
                  </div>
                </div>

                <div className={styles.cardMain}>
                  <img
                    src="public\dorian-baumann-Sl-2gao5QE4-unsplash.jpg"
                    alt=""
                  />

                  <div className={styles.cardInfoMain}>
                    <h4>Swiss Alps</h4>
                    <p>
                      Explore the majestic beauty
                      <br /> of the Swiss Alps with scenic mountain.
                    </p>
                  </div>
                </div>

                <div className={styles.cardRight}>
                  <img src="public\michael-DsAx4zEh8AM-unsplash.jpg" alt="" />

                  <div className={styles.cardInfo}>
                    <h4>Iceland</h4>
                    <p>
                      Discover the breathtaking beauty
                      <br /> of Iceland with its dramatic landscapes.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <Col span={12}>
            <div className={styles.aboutTexts}>
              <h3 className={styles.greenTitle}>ABOUT US</h3>
              <h1 className={styles.aboutTItle}>
                Feel nature
                <br /> differently
              </h1>
              <div className={styles.line}></div>
              <p>
                We create immersive journeys that reconnect <br /> you with the
                world.
              </p>
              <h1 className={styles.aboutTitlesecondary}>
                Adventures without <br /> limits
              </h1>
              <p>
                Every Tour is designed to push your boundaries <br /> and
                inspire you.
              </p>
              <button className={styles.Learnbut}>
                Learn more
                {/* <img src={arrow} alt="" /> */}
              </button>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.aboutphotos}>
              <img
                src="public\ante-samarzija-5VhbvWXOURs-unsplash.jpg"
                alt="1"
                className={styles.photo0}
              />
              <img
                src="public\pietro-de-grandi-Q5dMq3cKqec-unsplash.jpg"
                alt="1"
                className={styles.photo1}
              />
              <img
                src="public\pexels-alex-dttrch-343616050-14137913.jpg"
                alt="1"
                className={styles.photo2}
              />
            </div>
          </Col>
        </div>
      </section>
      <section className={styles.toursSection}>
        <div className={styles.toursHeader}>
          <h1 className={styles.popularTitle}>Most Popular Tours</h1>
          <div className={styles.greenLine}></div>
        </div>

        <Row justify={"center"} gutter={[40, 40]} className={styles.tours}>
          {tours.slice(0, 3).map((tour) => (
            <Col span={6} key={tour.id} className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <div className={styles.imgWrapper}>
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className={styles.cardImg}
                      />
                    </div>

                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{tour.name}</h3>

                      <p className={styles.cardText}>
                        {tour.duration} day tours
                      </p>

                      <p className={styles.cardText}>
                        Difficulty: {tour.difficulty}
                      </p>

                      <p className={styles.cardText}>{tour.summary}</p>
                    </div>
                  </div>

                  <div className={styles.cardBack}>
                    <p className={styles.cardOnly}>ONLY</p>

                    <h2 className={styles.cardPrice}>${tour.price}</h2>

                    <NavLink className={styles.cardBtn} to={"/alltours"}>
                      BOOK NOW
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2>Ready for your next adventure?</h2>
            <p>Let’s create memories that will last a lifetime.</p>
          </div>
          <NavLink to={"/alltours"} className={styles.ctaButton}>
            Book Your Tour
            <span>→</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
