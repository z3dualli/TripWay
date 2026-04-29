import { Col, Row } from "antd"
import styles from "./MainPage.module.scss"
import { useEffect, useState } from "react"
import type { TourType } from "../types/type"
import { getTours } from "../service/service"
import { NavLink } from "react-router-dom"


const MainPage = ()=> {

  const [tours, setTours] = useState<TourType[]>([])

  useEffect(()=> {
    getTours().then((res)=> setTours(res.data))
  }, [])
  
  return (
  <Col span={24} className={styles.main}>
    <Row align="middle" justify={"center"} className={styles.section}>
      <div className={styles.TitleWrapper}>
        <div className={styles.Title}>
          <h1>EXCITING TOURS FOR ADVENTUROUS PEOPLE</h1>
        </div>
      </div>
      <Col span={12} className={styles.left}>
        <div className={styles.desc}>
          <h2>YOU'RE GOING TO FALL WITH NATURE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur libero repellat quis
            consequatur ducimus quam nisi exercitationem omnis earum qui.
          </p>

          <h2>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores nulla deserunt voluptatum nam.
          </p>
        </div>
        <button className={styles.learnBtn}>Learn more</button>
      </Col>

      <Col span={12} className={styles.right}>
        <img src="public/mountains-wallpaper-3840x2160-serene-water-breathtaking-landscape-8164.jpg" alt="1" className={styles.photo0}/>
        <img src="public/hero-small.jpg" alt="1" className={styles.photo1}/>
        <img src="public/nat-8.jpg" alt="1" className={styles.photo2}/>
      </Col>
    </Row>
    <div className={styles.secondaryTitleWrapper}>
      <h1 className={styles.secondaryTitle}>MOST POPULAR TOURS</h1>
    </div>
    <Row justify={"center"} gutter={[40, 40]} className={styles.tours}>
          {
            tours.slice(0, 3).map((tour)=> (
              <Col span={6} key={tour.id} className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <div className={styles.imgWrapper}>
                        <img src={tour.image} alt={tour.name} className={styles.cardImg}/>
                      </div>
                      <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{tour.name}</h3>
                        <p className={styles.cardText}>{tour.duration} day tours</p>
                        <p className={styles.cardText}>Difficulty: {tour.difficulty}</p>
                        <p className={styles.cardText}>{tour.summary}</p>
                      </div>
                    </div>
                    <div className={styles.cardBack}>
                      <p className={styles.cardOnly}>ONLY</p>
                      <h2 className={styles.cardPrice}>${tour.price}</h2>
                      {/* <button className={styles.cardBtn}>BOOK NOW</button> */} <NavLink className={styles.cardBtn} to={'/alltours'}>BOOK NOW</NavLink>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          }
          {/* <div className={styles.secondaryBtn} > <NavLink to={'/alltours'}>DISCOVER ALL TOURS</NavLink>  </div> */}
    </Row>
  </Col>
)
}

export default MainPage