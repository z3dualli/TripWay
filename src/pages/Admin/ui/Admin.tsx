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
import { DifficultyOptions, initialTour, type AppType, type PostTourPayload } from "../types/type";
import {
  DeleteTour,
  getTourList,
  PatchTour,
  postTour,
} from "../service/service";
import { useLocation } from "react-router-dom";

const Admin = () => {
  const [tourList, setTourList] = useState<AppType[]>([]); // гет туров и мап
  const [open, setOpen] = useState(false); // модалка для пост тура
  const [form] = Form.useForm<PostTourPayload>(); // форма для пост тура
  const [isEdit, setIsEdit] = useState(false); //модалка для патч туррв
  const [selectedTour, setSelectedTour] = useState<AppType>(initialTour); // выбранный тур
  const [formEdit] = Form.useForm<AppType>(); // форма для патч тура
  const {pathname} = useLocation() //моментальный скролл в начало страницч

  useEffect(() => {
    window.scrollTo(0, 0)
    getData();
  }, [pathname]);

  const getData = () => {
    getTourList().then((res) => setTourList(res.data));
  };

  const handleEdit = (tour: AppType) => {
    setSelectedTour(tour);
    formEdit.setFieldsValue(tour);
    setIsEdit(true);
  };

  const handlePatch = async () => {
    const data = await formEdit.validateFields();
    await PatchTour(selectedTour.id, data).then(() => {
      setIsEdit(false);
      getData();
      notification.success({ message: "Успешно изменено!" });
    });
  };

  const handlePost = async () => {
    const data = await form.validateFields();
    await postTour(data);
    notification.success({ message: "Тур добавлен" });
    form.resetFields();
    setOpen(false);
    getData();
  };

  const handleDelete = async (id: number) => {
    await DeleteTour(id);
    notification.success({ message: "Успешно Удалено" });
    getData();
  };
  const editModalContent = (
    <Col span={24}>
      <Form form={formEdit}>
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
          <Col className={styles.saveButWrap}>
            <button className={styles.saveBut} onClick={handlePatch}>
              Save
            </button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
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
    <Row className={styles.topBar} justify={"space-between"} align="middle">
      <Col>
        <p className={styles.subtitle}>Admin / Tours</p>
        <h1 className={styles.title}>Tours Management</h1>
      </Col>
      <Col>
        <button className={styles.addButton} onClick={() => setOpen(true)}>
          Add Tour
        </button>
      </Col>
    </Row>

    {/* на мобилке шапку скрываем */}
    <Row className={styles.header} align="middle">
      <Col xs={0} md={3}>Photo</Col>
      <Col xs={0} md={4}>Tour Name</Col>
      <Col xs={0} md={5}>Summary</Col>
      <Col xs={0} md={3}>Duration</Col>
      <Col xs={0} md={3}>Difficulty</Col>
      <Col xs={0} md={3}>Price</Col>
      <Col xs={0} md={3}>Actions</Col>
    </Row>

    {tourList.map((tour) => (
      <Row key={tour.id} className={styles.row} align="middle">

        {/* фото */}
        <Col xs={24} md={3} className={styles.photoCol}>
          <img src={tour.image} alt={tour.name} className={styles.photo} />
        </Col>

        {/* название */}
        <Col xs={12} md={4} className={styles.tourName}>
          {tour.name}
        </Col>

        {/* summary — скрываем на мобилке */}
        <Col xs={0} md={5}>
          <p className={styles.tourSummary}>{tour.summary}</p>
        </Col>

        {/* duration */}
        <Col xs={12} md={3} className={styles.duration}>
          {tour.duration} days
        </Col>

        {/* difficulty */}
        <Col xs={12} md={3} className={styles[tour.difficulty]}>
          {tour.difficulty}
        </Col>

        {/* price */}
        <Col xs={12} md={3} className={styles.price}>
          ${tour.price}
        </Col>

        {/* actions */}
        <Col xs={24} md={3} className={styles.actions}>
          <button
            className={styles.editButton}
            onClick={() => handleEdit(tour)}
          >
            Edit
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(tour.id)}
          >
            Delete
          </button>
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
    <Modal
      title="Edit Tour"
      open={isEdit}
      onCancel={() => {
        setIsEdit(false);
        formEdit.resetFields();
      }}
      footer={false}
    >
      {editModalContent}
    </Modal>
  </Col>
)
};

export default Admin;
