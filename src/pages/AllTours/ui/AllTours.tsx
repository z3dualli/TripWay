import { Col, Modal, Row, Spin } from "antd";
import styles from "./AllTours.module.scss";
import { useEffect, useState } from "react";
import type { AlltourType } from "../types/type";
import { getAlltours } from "../service/service";
import { useAppDispatch } from "../../../app/hooks";
import { addToCart } from "../../Cart/model/cartSlice";
const AllTours = () => {
  const [alltours, setAlltours] = useState<AlltourType[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<AlltourType | null>(null);

  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsloading(true);
      const res = await getAlltours();
      setAlltours(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsloading(false);
    }
  };

  const handleOpenModal = (tour: AlltourType) => {
    setSelectedTour(tour);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedTour(null);
  };

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (selectedTour) {
      dispatch(addToCart(selectedTour));
      setOpen(false);
    }
  };

  const renderTourCard = (tour: AlltourType) => {
    return isloading ? (
      <Spin />
    ) : (
      <Col span={7} key={tour.id} className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <div className={styles.imgWrapper}>
                <img
                  src={tour.image}
                  alt={tour.name}
                  className={styles.cardImg}
                />
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

              <button
                className={styles.cardBtn}
                onClick={() => handleOpenModal(tour)}
              >
                BOOK TOUR
              </button>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  const modalContent = selectedTour ? (
    <Col span={24}>
      <Row gutter={24} className={styles.modal}>
        <Col span={12}>
          <img src={selectedTour.image} alt={selectedTour.name} />
        </Col>

        <Col span={12}>
          <h2>{selectedTour.name}</h2>

          <p className={styles.meta}>
            {selectedTour.duration} days • {selectedTour.difficulty}
          </p>

          <p className={styles.summary}>{selectedTour.summary}</p>

          <div className={styles.priceBlock}>
            <span>Price</span>
            <h3>${selectedTour.price}</h3>
          </div>

          <button className={styles.btn} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </Col>
      </Row>
    </Col>
  ) : null;

  return (
    <Col span={24} className={styles.alltours}>
      <div className={styles.toursTitleWrapper}>
        <h1 className={styles.toursTitle}>ALL TOURS</h1>
      </div>

      <Row justify="center" gutter={[36, 36]} className={styles.tours}>
        {alltours.map(renderTourCard)}
      </Row>

      <Modal open={open} onCancel={handleCloseModal} footer={false}>
        {modalContent}
      </Modal>
    </Col>
  );
};

export default AllTours;
