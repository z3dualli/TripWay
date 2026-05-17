import {FacebookFilled, GoogleOutlined ,LockOutlined ,MailOutlined, } from "@ant-design/icons";
import treelogo from '../../../../../public/pine-tree(1).svg'
import styles from "./LoginPage.module.scss";
import { Form, Input, notification } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import type { RegisterData, RegisterPayload } from "../../types/type";
import { loginUser } from "../../services/service";

const LoginPage = () => {

  const [form] = Form.useForm<RegisterData>()
  const navigate = useNavigate()

  const handleLogin = async ()=> {
    try {
      const values = await form.validateFields()

      const payload: RegisterPayload = {
        email: values.email,
        password: values.password,
      }
      const res = await loginUser(payload)
      localStorage.setItem('token', res.data.accessToken)

      notification.success({message: "Успешно Вошли в аккаунт"})

      form.resetFields()
      navigate('/')
    } catch (e) {
      console.log(e);
      notification.error({message: "Неверный email или пароль"})
    }
  }

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
            {/* нету аккаунта? */}
            <div className={styles.authTopText}>
              <span>Don't have an account?</span>
              <NavLink to={'/register'}><button type="button">Sign up</button></NavLink>
            </div>

            <Form form={form}
              className={styles.authFormWrapper}layout="vertical">
              <div className={styles.authTitleWrapper}>
                <h2>Welcome back</h2>
                <p>Login to your account to continue.</p>
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

              {/* кнопка забыли пароль? */}
              <button type="button" className={styles.authForgotButton}>Forgot password?</button>
              <button type="submit" className={styles.authLoginButton} onClick={handleLogin}>Sign In</button>
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

export default LoginPage;