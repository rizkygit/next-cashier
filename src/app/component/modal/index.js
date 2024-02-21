import { Modal, Button } from 'antd';
import { useState } from 'react';

const modalStyle = {
    width: '480px',
    borderRadius: '20px',
    boxShadow: '0 0 10px #dcdfe6',
    overflow: 'hidden',
    paddingBottom: '0px',
};

const Popup = ({ text, children, title, type, footer, modalOpen, setModal }) => {
    const openModal = () => {
        setModal(true);
    }

    return (
        <>
            <Modal
                title={title}
                open={modalOpen}
                style={modalStyle}
                footer={footer}
                centered
                closable={false}
            >
                {children}
            </Modal>
            <Button type={type} onClick={openModal}>{text}</Button>
        </>
    );
}

export default Popup
