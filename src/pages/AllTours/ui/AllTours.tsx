import { Col, Row } from 'antd'
import styles from './AllTours.module.scss'
import { useEffect, useState } from 'react'
import type { AlltourType } from '../types/type'
import { getAlltours } from '../service/service'

const AllTours = ()=> {
  
  const [alltours, setAlltours] = useState<AlltourType[]>([])

  useEffect(()=> {
    getAlltours().then((res)=> setAlltours(res.data))
  },[])

  return(
    <Col span={24} className={styles.alltours}>
      <div className={styles.toursTitleWrapper}>
        <h1 className={styles.toursTitle}>
          ALL TOURS
        </h1>
      </div>
      <Row justify={"center"} gutter={[36, 36]} className={styles.tours}>
          {
            alltours.map((tour)=> (
              <Col span={7} key={tour.id} className={styles.cards}>
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
                      <button className={styles.cardBtn}>BUY NOW</button>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          }
    </Row>

    </Col>
  )
}

export default AllTours