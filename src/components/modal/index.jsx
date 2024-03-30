import { Modal, Button } from 'antd';

const modalStyle = {
    width: '480px',
    borderRadius: '20px',
    boxShadow: '0 0 10px #dcdfe6',
    overflow: 'hidden',
    paddingBottom: '0px',
};

const Popup = ({ text, children, title, buttonType, footer, open, onClick, icon }) => {
    return (
        <>
            <Modal
                title={title}
                open={open}
                style={modalStyle}
                footer={footer}
                centered
                closable={false}
            >
                {children}
            </Modal>
            <Button type={buttonType} onClick={onClick} icon={icon}>{text}</Button>
        </>
    );
}

export default Popup
