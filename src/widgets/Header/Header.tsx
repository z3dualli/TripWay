import Icon from '../../assets/Icon'
import { Col, Row } from 'antd'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = ()=> {
  return(
        <Row align={'middle'} justify={'space-between'} className={styles.header}>        
            <Col span={6} className={styles.logo}>
              <Icon/>
              <h1>TRIPWAY</h1>
            </Col>
              

              <Col span={12} className={styles.nav}>
                  <NavLink to={'/'}>STORIES</NavLink>
                  <NavLink to={'/'}>ABOUT TOURS</NavLink>
                  <NavLink to={'/alltours'}>ALL TOURS</NavLink>
                  <NavLink to={'/'}>YOUR BENEFITS</NavLink>  
              </Col>

            <Col span={6} className={styles.auth}>
              <button>LOGIN</button>
              <button>REGISTER</button>
            </Col>
      </Row>
  )
}

export default Header