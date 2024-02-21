import Link from "next/link";
import React, { useState } from 'react';
import { Button } from "antd"
import Popup from "@/app/component/modal"

// "use client"


const SectionButton = () => {
    const [modalOpen, setModal] = useState(false);
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
        <div className="flex justify-evenly">
            <Link href="/admin" passHref>
            <Button htmlType="submit">Login</Button>
            </Link>
            <span>
                <span>or</span>
                <Popup title="Register" type="link" text={"create account"} footer={FooterRegister} modalOpen={modalOpen} setModal={setModal}>hai sayang</Popup>
            </span>
        </div>
    )
}

export default SectionButton