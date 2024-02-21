import React from 'react'
import { Menu } from 'antd'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('dashboard', '1', <PieChartOutlined />),
    
    getItem('products', '2', <PieChartOutlined />),
    getItem('order', '3', <PieChartOutlined />),
];

const NavigationItems = () => {
    return (
        <>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </>
    )
}

export default NavigationItems
