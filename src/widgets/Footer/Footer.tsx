import { Row, Col, Input } from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.top}>
        <Row
          gutter={[
            { xs: 20, sm: 30, md: 40, lg: 60 },
            { xs: 30, md: 40 },
          ]}
        >

          <Col xs={24} md={12} lg={8}>
            <div className={styles.brand}>
              <h2 className={styles.logo}>Nature.</h2>

              <p className={styles.brandText}>
                Discover breathtaking destinations and unforgettable experiences
                with handcrafted tours around the world. We create journeys that
                connect people with nature, adventure and freedom.
              </p>

              <div className={styles.contact}>
                <div className={styles.contactItem}>
                  <EnvironmentOutlined />
                  <span>21 Adventure Street, Mountain View</span>
                </div>

                <div className={styles.contactItem}>
                  <MailOutlined />
                  <span>nature@email.com</span>
                </div>

                <div className={styles.contactItem}>
                  <PhoneOutlined />
                  <span>+1 234 567 890</span>
                </div>
              </div>
            </div>
          </Col>


          <Col xs={12} sm={8} md={6} lg={4}>
            <div className={styles.menu}>
              <h3 className={styles.menuTitle}>Company</h3>
              <button className={styles.link}>About Us</button>
              <button className={styles.link}>Careers</button>
              <button className={styles.link}>Our Team</button>
              <button className={styles.link}>Blog</button>
              <button className={styles.link}>Press</button>
            </div>
          </Col>

          {/* TOURS */}

          <Col xs={12} sm={8} md={6} lg={4}>
            <div className={styles.menu}>
              <h3 className={styles.menuTitle}>Tours</h3>
              <button className={styles.link}>Mountain Tours</button>
              <button className={styles.link}>Forest Tours</button>
              <button className={styles.link}>Camping</button>
              <button className={styles.link}>Hiking</button>
              <button className={styles.link}>Custom Trips</button>
            </div>
          </Col>

          {/* SUPPORT */}

          <Col xs={12} sm={8} md={6} lg={4}>
            <div className={styles.menu}>
              <h3 className={styles.menuTitle}>Support</h3>
              <button className={styles.link}>Help Center</button>
              <button className={styles.link}>Privacy Policy</button>
              <button className={styles.link}>Terms & Conditions</button>
              <button className={styles.link}>FAQs</button>
              <button className={styles.link}>Contact</button>
            </div>
          </Col>


          <Col xs={24} md={18} lg={4}>
            <div className={styles.newsletter}>
              <h3 className={styles.menuTitle}>Newsletter</h3>

              <p className={styles.newsText}>
                Subscribe to get special offers and travel inspiration.
              </p>
              <Input placeholder="Your email" className={styles.input} />
              <button className={styles.subscribe}>Subscribe</button>
              <div className={styles.socials}>
                <button className={styles.icon}>
                  <InstagramOutlined />
                </button>
                <button className={styles.icon}>
                  <FacebookOutlined />
                </button>
                <button className={styles.icon}>
                  <TwitterOutlined />
                </button>
                <button className={styles.icon}>
                  <YoutubeOutlined />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* BOTTOM */}

      <div className={styles.bottom}>
        <Row justify="space-between" align="middle" gutter={[20, 20]}>
          <Col xs={24} md={12}>
            <p className={styles.copy}>
              © 2025 Nature. All rights reserved.
            </p>
          </Col>

          <Col xs={24} md={12}>
            <div className={styles.bottomLinks}>
              <button className={styles.bottomLink}>Privacy</button>
              <button className={styles.bottomLink}>Terms</button>
              <button className={styles.bottomLink}>Cookies</button>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;