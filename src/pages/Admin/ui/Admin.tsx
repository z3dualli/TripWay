import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  notification,
  Row,
  Select,
} from "antd";
import styles from "./Admin.module.scss";
import { useEffect, useState } from "react";
import { DifficultyOptions, type AppType } from "../types/type";
import { DeleteTour, getTourList, postTour } from "../service/service";

const Admin = () => {
  const [tourList, setTourList] = useState<AppType[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<AppType>();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getTourList().then((res) => setTourList(res.data));
  };

  const handlePost = async () => {
    const data = await form.validateFields();
    await postTour(data);
    notification.success({ message: "Тур добавлен" });
    form.resetFields();
    setOpen(false);
    getData();
  };

  const handleDelete = async(id: number)=> {
    await DeleteTour(id)
    notification.success({ message: "Успешно Удалено"})
    getData()
  }
  const modalContent = (
    <Col span={24}>
      <Form form={form}>
        <Row gutter={[0, 4]}>
          <Col span={24}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Введите название!" }]}
            >
              <Input placeholder="Tour Name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="summary"
              rules={[{ required: true, message: "Введите описание!" }]}
            >
              <Input.TextArea placeholder="Summary" rows={3} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="duration"
              rules={[{ required: true, message: "Введите длительность!" }]}
            >
              <Input placeholder="Duration (days)" type="number" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="difficulty"
              rules={[{ required: true, message: "Выберите сложность!" }]}
            >
              <Select placeholder="Difficulty" options={DifficultyOptions} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="price"
              rules={[{ required: true, message: "Введите цену!" }]}
            >
              <Input placeholder="Price" type="number" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type="primary" onClick={handlePost}>
              Post
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );

  return (
    <Col span={24} className={styles.admin}>
      <Row className={styles.topBar} justify={"space-between"}>
        <Col>
          <p className={styles.subtitle}>Admin / Tours</p>
          <h1 className={styles.title}>Tours Management</h1>
        </Col>
        <Col>
          <button
            className={styles.addButton}
            onClick={() => setOpen(true)}
          >
            Add Tour
          </button>
        </Col>
      </Row>

      <Row className={styles.header} align="middle">
        <Col span={3}>Photo</Col>
        <Col span={4}>Tour Name</Col>
        <Col span={5}>Summary</Col>
        <Col span={3}>Duration</Col>
        <Col span={3}>Difficulty</Col>
        <Col span={3}>Price</Col>
        <Col span={3}>Actions</Col>
      </Row>

      {tourList.map((tour) => (
        <Row key={tour.id} className={styles.row} align="middle">
          <Col span={3}>
            <img src={tour.image} alt={tour.name} className={styles.photo} />
          </Col>
          <Col span={4} className={styles.tourName}>
            {tour.name}
          </Col>
          <Col span={5}>
            <p className={styles.tourSummary}>{tour.summary}</p>
          </Col>
          <Col span={3} className={styles.duration}>
            {tour.duration} days
          </Col>
          <Col span={3} className={styles[tour.difficulty]}>
            {tour.difficulty}
          </Col>
          <Col span={3} className={styles.price}>
            ${tour.price}
          </Col>
          <Col span={3} className={styles.actions}>
            <button className={styles.editButton}>Edit</button>
            <button className={styles.deleteButton} onClick={()=> handleDelete(tour.id)}>Delete</button>
          </Col>
        </Row>
      ))}

      <Modal
        title="Add New Tour"
        open={open}
        onCancel={() => {
          setOpen(false);
          form.resetFields();
        }}
        footer={false}
      >
        {modalContent}
      </Modal>
    </Col>
  );
};

export default Admin;
