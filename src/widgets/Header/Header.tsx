import Icon from "../../assets/Icon";
import { Col, Row } from "antd";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import cartIcon from "../../assets/icons/cart-alt.svg";
import likeIcon from "../../assets/icons/heart.svg";
import { useAppSelector } from "../../app/hooks";

const Header = () => {
  const cart = useAppSelector((state) => state.cart);
  const totalTour = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <Row align={"middle"} justify={"space-between"} className={styles.header}>
      <Col span={6} className={styles.logo}>
        <Icon />
        <h1>TripWay</h1>
      </Col>

      <Col span={12}>
        <div className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            end
          >
            ABOUT TOURS
          </NavLink>

          <NavLink
            to="/alltours"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            ALL TOURS
          </NavLink>

          <NavLink
            to="/benefits"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            YOUR BENEFITS
          </NavLink>

          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            STORE
          </NavLink>
        </div>
      </Col>
      <Col span={6} className={styles.auth}>
        <div className={styles.authBlock}>
          <button className={styles.cartBut}>
            <img src={likeIcon} alt="favorites" />
          </button>

          <NavLink to={"/cart"}>
            <button className={styles.cartBut}>
              <img src={cartIcon} alt="Cart" />
              {totalTour > 0 && (
                <span className={styles.notice}>{totalTour}</span>
              )}
            </button>
          </NavLink>

          <NavLink to={"/login"}>
            <button className={styles.loginBut}>LOGIN</button>
          </NavLink>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
