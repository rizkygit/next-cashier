import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import Popup from "./index";
import menuApi from '@/app/api/menuApi';

const ModalProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Panggil fungsi addMenu dari menuApi untuk menambahkan menu baru
      await menuApi.addMenu(formData);
      // Setelah menambahkan menu, kosongkan formulir
      setFormData({
        name: '',
        description: '',
        price: '',
        category: ''
      });
      setModal(false)
      // Tambahkan logika navigasi atau pesan sukses jika diperlukan
    } catch (error) {
      console.error('Error adding menu:', error);
      // Tambahkan logika penanganan kesalahan jika diperlukan
    }
  };

  const [ModalProduct, setModal] = useState(false);
  const modalClick = () => {
    setModal(true);
  }
  const handleCancel = () => {
    setModal(false)
  }
  const FooterMenu = [
    <Button key="back" onClick={handleCancel}>
      Cancle
    </Button>,
    <Button key="submit" type="primary" onClick={handleSubmit}>
      Submit
    </Button>,
  ];
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Popup
        title="Add Product"
        open={ModalProduct}
        footer={FooterMenu}
        setModal={setModal}
        buttonType={'primary'}
        icon={<PlusOutlined />}
        onClick={modalClick}>
        <Form layout="vertical" style={{ maxWidth: 600, marginTop: 20, }} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item
            label="Name"
            rules={[
              {
                required: true,
                message: "Please provide a menu name!",
              },
            ]}
          >
            <Input
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please add a description!",
              },
            ]}
          >
            <Input
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please provide the price!",
              },
            ]}
          >
            <Input
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </Popup>
    </div>
  )
}

export default ModalProduct
