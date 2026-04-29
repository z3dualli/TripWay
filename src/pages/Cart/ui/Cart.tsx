import { Col, Row } from "antd";
import styles from "./Cart.module.scss";
import DeliveryIcon from "../../../assets/icons/delivery.svg";
import pointerIcon from "../../../assets/icons/dot-arrow-left.svg";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { decrement, increment, removeFromCart } from "../model/cartSlice";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const isEmpty = cart.length === 0;

  if (isEmpty) {
    return (
      <section className={styles.Cart}>
        <div className={styles.empty}>
          <h2>Your cart is empty :(</h2>
          <p>Start adding tours you like</p>
          <NavLink to={"/alltours"}>
            <button className={styles.shopBtn}>Book Tours Now</button>
          </NavLink>
        </div>
      </section>
    );
  }

  const dispatch = useAppDispatch();

  const subTotal = cart.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity;
  }, 0);

  return (
    <section className={styles.Cart}>
      <div className={styles.top}>
        <h2>Cart</h2>
        <p>Home / Cart</p>
      </div>
      <Row gutter={[32, 32]}>
        <Col span={16} className={styles.Tours}>
          <Row gutter={[60, 10]} align={"middle"} className={styles.headerRow}>
            <Col span={10}>Product Details</Col>
            <Col span={5}>Quantity</Col>
            <Col span={4}>Price</Col>
            <Col span={4}>Total</Col>
            <Col span={1}></Col>
          </Row>

          {cart.map((item) => (
            <div key={item.id} className={styles.itemCard}>
              <Row align="middle">
                <Col span={10}>
                  <div className={styles.product}>
                    <img src={item.image} alt={item.name} />
                    <div className={styles.productInfo}>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.duration}>{item.summary}</p>
                      <p className={styles.meta}>
                        {item.duration} days • {item.difficulty}
                      </p>
                    </div>
                  </div>
                </Col>

                <Col span={5}>
                  <div className={styles.quantity}>
                    <button onClick={() => dispatch(decrement(item.id))}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increment(item.id))}>
                      +
                    </button>
                  </div>
                </Col>

                <Col span={4} className={styles.priceCol}>
                  ${item.price}
                </Col>

                <Col span={4} className={styles.totalCol}>
                  ${item.price * item.quantity}
                </Col>

                <Col span={1} className={styles.removeCol}>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    X
                  </button>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
        <Col span={8} className={styles.Summary}>
          <div className={styles.SummaryCard}>
            <h3>Total</h3>
            <div className={styles.SummaryInfo}>
              <span>Sub-Total</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className={styles.SummaryInfo}>
              <span>Delivery</span>
              <img src={DeliveryIcon} alt="icon" />
            </div>
            <div className={styles.SummaryInfo}>
              <p className={styles.delivery}>Standart Delivery(Free)</p>
              <img
                src={pointerIcon}
                alt="pointericon"
                className={styles.pointerIcon}
              />
            </div>

            <button className={styles.Buybtn}>Check Out</button>

            <div className={styles.payment}>
              <p>We Accept</p>
              <div className={styles.paymentIcons}>
                <img
                  src="public\PayPal-Logo.wine.png"
                  alt=""
                  className={styles.paypalicon}
                />
                <img
                  src="public\wmlogo_vector_blue.png"
                  alt=""
                  className={styles.wbIcon}
                />
                <img
                  src="public\KKS.F-9d710a31.png"
                  alt=""
                  className={styles.kaspiIcon}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Cart;
