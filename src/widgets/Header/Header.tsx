import {Col,Drawer,Row} from "antd";
import styles from "./Header.module.scss";
import {NavLink,useLocation} from "react-router-dom";

import cartIcon from "../../assets/icons/cart-alt.svg";

import {useAppDispatch,useAppSelector} from "../../app/hooks";
import {logout} from "../../pages/Auth/model/AuthSlice";

import {useEffect,useState} from "react";

import {
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const Header=()=>{

  const dispatch=useAppDispatch();
  const location=useLocation();
  const {email,isAuth,role}=useAppSelector(
    (state)=>state.auth
  );
  const cart=useAppSelector((state)=>state.cart);
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  const isMainPage=location.pathname==="/";
  const totalTour=cart.reduce((acc,item)=>{
    return acc+item.quantity;
  },0);

  useEffect(()=>{
    if(!isMainPage)return;
    const handleScroll=()=>{
      setScrolled(window.scrollY>40);
    };
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };

  },[isMainPage]);

  return(
    <>
      <div
        className={`${styles.headerWrap} ${
          scrolled || !isMainPage
            ? styles.scrolled
            : ""
        }`}
      >
        <Row
          align="middle"
          justify="space-between"
          className={styles.header}
        >

          <Col xs={12} lg={5}>
            <div className={styles.logo}>
              <span>TripWay</span>
            </div>
          </Col>

          <Col xs={0} lg={13}>
            <Row
              justify="center"
              align="middle"
              className={styles.nav}
            >
              {role!=="admin"&&(
                <>
                  <NavLink
                    to="/"
                    className={({isActive})=>
                      isActive
                        ? `${styles.link} ${styles.active}`
                        : styles.link
                    }
                    end
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/alltours"
                    className={({isActive})=>
                      isActive
                        ? `${styles.link} ${styles.active}`
                        : styles.link
                    }
                  >
                    Tours
                  </NavLink>

                  <NavLink
                    to="/benefits"
                    className={({isActive})=>
                      isActive
                        ? `${styles.link} ${styles.active}`
                        : styles.link
                    }
                  >
                    Benefits
                  </NavLink>

                  <NavLink
                    to="/store"
                    className={({isActive})=>
                      isActive
                        ? `${styles.link} ${styles.active}`
                        : styles.link
                    }
                  >
                    Blog
                  </NavLink>
                </>
              )}

            </Row>
          </Col>

          <Col xs={0} lg={6}>
            <Row
              justify="end"
              align="middle"
              gutter={16}
            >

              {role!=="admin"&&(
                <Col>
                  <NavLink to={"/cart"}>
                    <button className={styles.cartBut}>

                      <img
                        src={cartIcon}
                        alt="cart"
                      />

                      {totalTour>0&&(
                        <span className={styles.notice}>
                          {totalTour}
                        </span>
                      )}

                    </button>
                  </NavLink>
                </Col>
              )}

              <Col>

                {isAuth?(
                  <Row
                    align="middle"
                    gutter={12}
                  >

                    <Col>
                      <span className={styles.userAcc}>
                        {email}
                      </span>
                    </Col>

                    <Col>
                      <button
                        className={styles.logoutBut}
                        onClick={()=>{
                          dispatch(logout());
                        }}
                      >
                        Logout
                      </button>
                    </Col>

                  </Row>
                ):(
                  <NavLink to={"/login"}>
                    <button className={styles.loginBut}>
                      Sign In
                    </button>
                  </NavLink>
                )}

              </Col>

            </Row>
          </Col>

          <Col xs={12} lg={0}>
            <Row justify="end">
              <button
                className={styles.menuButton}
                onClick={()=>{
                  setOpen(true);
                }}
              >
                <MenuOutlined/>
              </button>
            </Row>
          </Col>

        </Row>
      </div>

      <Drawer
        placement="right"
        open={open}
        onClose={()=>{
          setOpen(false);
        }}
        closable={false}
        className={styles.drawer}
      >

        <Row
          justify="space-between"
          align="middle"
          className={styles.drawerTop}
        >

          <h2>TripWay</h2>

          <button
            className={styles.closeButton}
            onClick={()=>{
              setOpen(false);
            }}
          >
            <CloseOutlined/>
          </button>

        </Row>

        <Col className={styles.mobileNav}>

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/alltours">
            Tours
          </NavLink>

          <NavLink to="/benefits">
            Benefits
          </NavLink>

          <NavLink to="/store">
            Blog
          </NavLink>

        </Col>

        <Col className={styles.mobileBottom}>

          <NavLink to={"/cart"}>
            <button className={styles.mobileCart}>
              Cart ({totalTour})
            </button>
          </NavLink>

          {isAuth?(
            <button
              className={styles.mobileLogout}
              onClick={()=>{
                dispatch(logout());
              }}
            >
              Logout
            </button>
          ):(
            <NavLink to={"/login"}>
              <button className={styles.mobileLogin}>
                Sign In
              </button>
            </NavLink>
          )}

        </Col>

      </Drawer>
    </>
  );
};

export default Header;