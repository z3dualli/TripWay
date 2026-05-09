import {
  FacebookFilled,
  GoogleOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import treelogo from '../../../../../public/pine-tree(1).svg'

import styles from "./RegisterPage.module.scss";
import { Form, Input } from "antd";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <div className={styles.authRow}>
          <div className={styles.authLeft}>
            <div className={styles.authOverlay} />
            <img src="/nat-4.jpg" alt="" className={styles.authimg}/>
            <div className={styles.authLogoWrapper}>
              <img src={treelogo} alt="" className={styles.treelogo}/>
              <div className={styles.authLogoText}>
                <span>TRIPWAY</span>
                <span>TOURS</span>
              </div>
            </div>
            <div className={styles.authLeftContent}>
              <h1>Explore <br /> the world</h1>
              <p>Discover amazing places<br />and unforgettable experiences<br />with our nature tours.</p>
            </div>
          </div>
          <div className={styles.authRight}>
            <div className={styles.authTopText}>
              <span>Already have an account?</span>
              <NavLink to={'/login'}><button type="button">Sign In</button></NavLink>
            </div>

            <Form
              className={styles.authFormWrapper}layout="vertical" onFinish={(values) => {console.log("LOGIN DATA:", values);}}>
              <div className={styles.authTitleWrapper}>
                <h2>Sign Up</h2>
                <p>Register your account to continue.</p>
              </div>
              {/* поле почты*/}
              <Form.Item label="Email"name="email" rules={[{required: true, message: "Email is required",},{type: "email", message: "Enter valid email",},]}>
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                />
              </Form.Item>

              {/* поле пароля */}
              <Form.Item label="Password" name="password" rules={[{required: true, message: "Password is required",},{min: 8, message: "Minimum 8 symbols",},]}>
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                />
              </Form.Item>
              {/* проверка пароля */}
              <Form.Item label="Confirm Password" name="confirmpassword" rules={[{required: true, message: "Confirm Password is required",},{min: 8, message: "Minimum 8 symbols",},]}>
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Confirm your password"
                />
              </Form.Item>

              <button type="submit" className={styles.authLoginButton}>
                Sign Up
              </button>

              <div className={styles.authDivider}>
                <span />
                <p>or</p>
                <span />
              </div>

              <div className={styles.authSocials}>
                <button type="button" className={styles.authSocialButton}
                >
                  <GoogleOutlined />
                  Continue with Google
                </button>

                <button type="button" className={styles.authSocialButton}
                >
                  <FacebookFilled />
                  Continue with Facebook
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;