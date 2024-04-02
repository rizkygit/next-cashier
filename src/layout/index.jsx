"use client"
import React, { useState } from 'react';
import { Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import { PieChartOutlined, CoffeeOutlined } from '@ant-design/icons';

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
    getItem('products', '/admin/menu', <PieChartOutlined />, 'null'),
    getItem('orders', '/admin/history', <PieChartOutlined />, 'null'),
];

const AdminLayout = ({ children }) => {
    const navigation = useRouter();
    const pathname = usePathname();
    const [selectedKey, setSelectedKey] = useState(pathname);
    const handleClick = (key) => {
        navigation.push(key);
        setSelectedKey(key);
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", }}>
            {/* <div className='logo'>
                <div className="icon" >
                    <CoffeeOutlined style={{ fontSize: '32px' }} />
                </div>
            </div> */}
            <Menu style={{ maxWidth: 174, minHeight: '100dvh' }} onClick={({ key }) => handleClick(key)} selectedKeys={selectedKey} mode="inline" items={items} />
            <div className='w-full'>
                <div style={{ margin: '20px 16px', }} >
                    <div style={{ padding: 24, minHeight: 360, backgroundColor: "#ffff", borderRadius: 8, }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
{/* <> */ }
{/* <Layout style={{ minHeight: '100dvh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='logo'>
            <div className="icon" >
                <CoffeeOutlined style={{ fontSize: '32px' }} />
            </div>
        </div>
        <Menu />
    </Sider>
    <Layout style={{ backgroundColor: BodyBg }}>
        <Header style={{ padding: 0, background: colorBgContainer, }} />
        <Content style={{ margin: '20px 16px', }} >
            <div style={{ padding: 24, minHeight: 360, backgroundColor: ContainerBg, borderRadius: borderRadiusLG, }}>
                {children}
            </div>
        </Content>
    </Layout>
</Layout>
</> */}

export default AdminLayout