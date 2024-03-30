import Link from "next/link";
import React, { useState } from 'react';
import { Button } from "antd"
import Popup from "./index";
import { PlusOutlined } from '@ant-design/icons';

const ModalProduct = () => {
  const [ModalProduct, setModal] = useState(false);
  const modalClick = () => {
    setModal(true);
  }
  const handleCancel = () => {
    setModal(false)
  }
  const handleOk = () => {
    setModal(false)
  }
  const FooterRegister = [
    <Button key="back" onClick={handleCancel}>
      Cancle
    </Button>,
    <Button disabled key="submit" type="primary" onClick={handleOk}>
      Register
    </Button>,
  ];
  return (
    <div>
      <Popup
        title="Add Product"
        open={ModalProduct}
        footer={FooterRegister}
        setModal={setModal}
        buttonType={'primary'}
        icon={<PlusOutlined />}
        onClick={modalClick}>add product</Popup>
    </div>
  )
}

export default ModalProduct
