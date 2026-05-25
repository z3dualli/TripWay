import { Col, Modal, Row } from "antd";
import styles from "./AllTours.module.scss";
import { useEffect, useState } from "react";
import type { AlltourType } from "../types/type";
import { getAlltours } from "../service/service";
import { useAppDispatch } from "../../../app/hooks";
import { addToCart } from "../../Cart/model/cartSlice";
import { useLocation } from "react-router-dom";

const AllTours = () => {
  const [alltours, setAlltours] = useState<AlltourType[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<AlltourType | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [pathname]);

  const getData = () => {
    getAlltours().then((res) => setAlltours(res.data));
  };

  const dispatch = useAppDispatch();

  const handleOpenModal = (tour: AlltourType) => {
    setSelectedTour(tour);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedTour(null);
  };

  const handleAddToCart = () => {
    if (selectedTour) {
      dispatch(addToCart(selectedTour));
      setOpen(false);
    }
  };

  const renderTourCard = (tour: AlltourType) => {
    return (
      <Col
        key={tour.id}
        xs={24}
        sm={12}
        md={8}
        lg={7}
        xl={7}
        className={styles.cards}
      >
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
                <p className={styles.cardText}>
                  Difficulty: {tour.difficulty}
                </p>
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
    <Row gutter={[24, 24]} className={styles.modal}>
      <Col xs={24} md={12}>
        <img
          src={selectedTour.image}
          alt={selectedTour.name}
          style={{ width: "100%", borderRadius: 8 }}
        />
      </Col>

      <Col xs={24} md={12}>
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
  ) : null;

  return (
    <Col span={24} className={styles.alltours}>
      <div className={styles.toursTitleWrapper}>
        <h1 className={styles.toursTitle}>ALL TOURS</h1>
      </div>

      <Row justify="center" gutter={[24, 24]} className={styles.tours}>
        {alltours.map(renderTourCard)}
      </Row>

      <Modal open={open} onCancel={handleCloseModal} footer={false} width={900}>
        {modalContent}
      </Modal>
    </Col>
  );
};

export default AllTours;