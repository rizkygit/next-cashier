import React, { useState } from 'react';
import { Menu } from 'antd'
import { useRouter, usePathname } from 'next/navigation';
import { PieChartOutlined } from '@ant-design/icons';

function getItem(label, key, icon, childern) {
    return {
        label,
        key,
        icon,
        childern,
    };
}

const items = [
    getItem('dashboard', '/admin/dashboard', <PieChartOutlined />, 'null'),
    getItem('products', '/admin/products', <PieChartOutlined />, 'null'),
    getItem('orders', '/admin/orders', <PieChartOutlined />, 'null'),
];

const MenuItems = () => {
    const navigation = useRouter();
    const pathname = usePathname();
    const [selectedKey, setSelectedKey] = useState(pathname);
    const handleClick = (key) => {
        navigation.push(key);
        setSelectedKey(key);
    }
    return (
        <>
            <Menu theme='dark' onClick={({ key }) => handleClick(key)} selectedKeys={selectedKey} mode="inline" items={items} />
        </>
    )
}

export default MenuItems
