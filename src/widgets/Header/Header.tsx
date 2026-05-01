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
      <Col span={12} className={styles.logo}>
        <h1>TripWay</h1>
      </Col>

      <Col span={12} className={styles.right}>
        <div className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/alltours"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Tours
          </NavLink>
          <NavLink
            to="/benefits"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Benefits
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Blog
          </NavLink>
        </div>

        <div className={styles.authBlock}>
          <NavLink to={"/cart"}>
            <button className={styles.cartBut}>
              <img src={cartIcon} alt="Cart" />
              {totalTour > 0 && (
                <span className={styles.notice}>{totalTour}</span>
              )}
            </button>
          </NavLink>

          <NavLink to={"/login"}>
            <button className={styles.loginBut}>Sign In</button>
          </NavLink>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
