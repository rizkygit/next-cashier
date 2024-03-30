import React, { useState } from 'react';
import Popup from "@/components/modal"
import { Button } from "antd"


const ModalRegister = () => {
    const [modalRegister, setModal] = useState(false);
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
        <>
            <Popup
                title="Register"
                buttonType="link"
                text={"create account"}
                footer={FooterRegister}
                open={modalRegister}
                setModal={setModal}
                onClick={modalClick}>hai sayang
            </Popup>
        </>
    )
}

export default ModalRegister
