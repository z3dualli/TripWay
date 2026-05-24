import { Button, Col, Row } from "antd";
import styles from "./Admin.module.scss";
import { useEffect, useState } from "react";
import type { AppType } from "../types/type";
import { getTourList } from "../service/service";

const Admin = () => {
  const [tourList, setTourList] = useState<AppType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getTourList().then((res) => setTourList(res.data));
  };

 return (
  <Col span={24} className={styles.admin}>
    <Row className={styles.topBar} justify={"space-between"}>
      <Col>
        <p className={styles.subtitle}>Admin / Tours</p>
        <h1 className={styles.title}>Tours Management</h1>
      </Col>
      <Col>
        <Button type="primary" className={styles.addButton}>Add Tour</Button>
      </Col>
    </Row>

    <Row className={styles.header} align="middle">
      <Col span={3}>Photo</Col>
      <Col span={6}>Tour Name</Col>
      <Col span={4}>Duration</Col>
      <Col span={4}>Difficulty</Col>
      <Col span={4}>Price</Col>
      <Col span={3}>Actions</Col>
    </Row>

    {tourList.map((tour) => (
      <Row key={tour.id} className={styles.row} align="middle">
        <Col span={3}>
          <img src={tour.image} alt={tour.name} className={styles.photo} />
        </Col>
        <Col span={6} className={styles.tourName}>{tour.name}</Col>
        <Col span={4} className={styles.duration}>{tour.duration} days</Col>
        <Col span={4} className={styles[tour.difficulty]}>{tour.difficulty}</Col>
        <Col span={4} className={styles.price}>${tour.price}</Col>
        <Col span={3}>
          <Row gutter={8}>
            <Col><button className={styles.editButton}>Edit</button></Col>
            <Col><button className={styles.deleteButton}>Delete</button></Col>
          </Row>
        </Col>
      </Row>
    ))}
  </Col>
)
};

export default Admin;
