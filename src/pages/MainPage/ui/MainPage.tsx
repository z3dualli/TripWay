import { Carousel, Col, Row } from "antd";
import {
  CompassOutlined,
  SafetyOutlined,
  StarOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

import styles from "./MainPage.module.scss";

import { useEffect, useState } from "react";
import type { TourType } from "../types/type";
import { getTours } from "../service/service";
import { NavLink, useLocation } from "react-router-dom";

const MainPage = () => {
  const [tours, setTours] = useState<TourType[]>([]);
  const {pathname} = useLocation()


  useEffect(() => {
    getTours().then((res) => setTours(res.data));
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <div className={styles.wrap}>
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90"
          alt="hero"
          className={styles.bg}
        />

        <Row justify="center" align="middle" className={styles.heroRow}>
          <Col xs={22} sm={20} md={18} lg={14} xl={12}>
            <div className={styles.heroBox}>
              <p className={styles.tag}>Discover the colorful world</p>

              <h1 className={styles.heroH1}>New Adventure</h1>

              <p className={styles.heroP}>
                Discover breathtaking destinations and unforgettable experiences
                with our handcrafted nature tours. Immerse yourself in pristine
                wilderness, witness majestic wildlife.
              </p>

              <NavLink to="/alltours">
                <button className={styles.heroBut}>Discover Now</button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </section>

      <section className={styles.about}>
        <div className={styles.head}>
          <h2 className={styles.h2}>Why Choose Us Your Nature Guide</h2>

          <p className={styles.sub}>
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <Row
          gutter={[
            { xs: 20, sm: 24, md: 40, lg: 80 },
            { xs: 40, md: 40 },
          ]}
          align="middle"
          className={styles.aboutRow}
        >
          <Col xs={24} lg={12}>
            <div className={styles.aboutPhotos}>
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=90"
                alt=""
                className={styles.photoTop}
              />

              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=90"
                alt=""
                className={styles.photoBottom}
              />
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.aboutText}>
              <h2 className={styles.aboutH2}>
                We Realize that nature heals the soul
              </h2>

              <p className={styles.aboutP}>
                We create immersive journeys that reconnect you with the world.
                Every tour is carefully crafted to give you the most authentic
                experience in nature.
              </p>

              <p className={styles.aboutP}>
                Every tour is designed to push your boundaries and inspire you
                to explore beyond your comfort zone.
              </p>

              <p className={styles.aboutP}>
                We believe that the best adventures are the ones that challenge
                you and leave you with memories that last a lifetime.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <section className={styles.features}>
        <div className={styles.head}>
          <h2 className={styles.h2}>Some Features that Made us Unique</h2>

          <p className={styles.sub}>
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <Row
          gutter={[
            { xs: 16, sm: 20, md: 24, lg: 28 },
            { xs: 16, sm: 20, md: 24, lg: 28 },
          ]}
        >
          <Col xs={24} sm={12} lg={8}>
            <div className={styles.card}>
              <CompassOutlined className={styles.cardIcon} />

              <h3 className={styles.cardTitle}>Expert Guides</h3>

              <p className={styles.cardP}>
                Our guides have years of experience leading tours across
                breathtaking destinations worldwide.
              </p>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <div className={styles.card}>
              <SafetyOutlined className={styles.cardIcon} />

              <h3 className={styles.cardTitle}>Safe & Secure</h3>

              <p className={styles.cardP}>
                Your safety is our top priority with comprehensive insurance and
                emergency support on every tour.
              </p>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <div className={styles.card}>
              <StarOutlined className={styles.cardIcon} />

              <h3 className={styles.cardTitle}>Highly Rated</h3>

              <p className={styles.cardP}>
                Over 12,000 happy travelers have rated us 4.9 stars.
              </p>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <div className={styles.card}>
              <EnvironmentOutlined className={styles.cardIcon} />

              <h3 className={styles.cardTitle}>Best Locations</h3>

              <p className={styles.cardP}>
                We carefully select only the most spectacular and unique
                destinations for our tours.
              </p>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <div className={styles.card}>
              <TeamOutlined className={styles.cardIcon} />

              <h3 className={styles.cardTitle}>Small Groups</h3>

              <p className={styles.cardP}>
                We keep our groups small to ensure a personal experience for
                every traveler.
              </p>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <div className={styles.card}>
              <TrophyOutlined className={styles.cardIcon} />

              <h3 className={styles.cardTitle}>Award Winning</h3>

              <p className={styles.cardP}>
                Recognized as the best nature tour company for five consecutive
                years.
              </p>
            </div>
          </Col>
        </Row>
      </section>


      <section className={styles.tours}>
        <div className={styles.head}>
          <h2 className={styles.h2White}>Most Popular Tours</h2>

          <p className={styles.subWhite}>
            Handcrafted tours for unforgettable experiences.
          </p>
        </div>
        <Carousel autoplay draggable arrows dots>
          {tours.map((tour) => (
            <div key={tour.id}>
              <Row
                align="middle"
                gutter={[
                  { xs: 20, md: 30, lg: 50 },
                  { xs: 30, md: 0 },
                ]}
                className={styles.slide}
              >
                <Col xs={24} lg={13}>
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className={styles.slideImg}
                  />
                </Col>

                <Col xs={24} lg={11}>
                  <div className={styles.slideBox}>
                    <p className={styles.slideTag}>Featured Tour</p>

                    <h2 className={styles.slideH2}>{tour.name}</h2>

                    <p className={styles.slideP}>{tour.summary}</p>

                    <Row
                      gutter={[
                        { xs: 20, md: 30 },
                        { xs: 16, md: 0 },
                      ]}
                      className={styles.slideMeta}
                    >
                      <Col xs={8}>
                        <p className={styles.metaNum}>{tour.duration}</p>

                        <p className={styles.metaLabel}>Days</p>
                      </Col>

                      <Col xs={8}>
                        <p className={styles.metaNum}>{tour.difficulty}</p>

                        <p className={styles.metaLabel}>Difficulty</p>
                      </Col>

                      <Col xs={8}>
                        <p className={styles.metaNum}>${tour.price}</p>

                        <p className={styles.metaLabel}>Price</p>
                      </Col>
                    </Row>

                    <NavLink to="/alltours">
                      <button className={styles.slideBut}>Book Now</button>
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </section>

      {/* статистика  */}

      <section className={styles.stats}>
        <Row
          justify="center"
          gutter={[
            { xs: 20, md: 40, lg: 60 },
            { xs: 30, md: 0 },
          ]}
        >
          <Col xs={12} md={6}>
            <div className={styles.statBox}>
              <h2>500+</h2>
              <p>Tours Completed</p>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className={styles.statBox}>
              <h2>12k+</h2>
              <p>Happy Travelers</p>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className={styles.statBox}>
              <h2>48</h2>
              <p>Countries</p>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className={styles.statBox}>
              <h2>4.9★</h2>
              <p>Average Rating</p>
            </div>
          </Col>
        </Row>
      </section>


      <section className={styles.cta}>
        <Row justify="center">
          <Col xs={24}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaH2}>Ready for your next adventure?</h2>

              <p className={styles.ctaP}>
                Let's create memories that will last a lifetime.
              </p>

              <NavLink to="/alltours">
                <button className={styles.ctaBut}>Book Your Tour</button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default MainPage;
