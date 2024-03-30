"use client"
import React, { useState } from 'react';
import { Layout, theme, ConfigProvider } from 'antd';
const { Header, Content, Sider } = Layout;
import Menu from './MenuItems';
import { CoffeeOutlined } from '@ant-design/icons'
// import theme from '@/app/theme.json';
//     const siderStyle = {
//         backgroundColor: theme.components.Layout.siderBg,
//     }
const AdminLayout = ({ children, BodyBg, ContainerBg }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <>
            <Layout style={{ minHeight: '100dvh' }}>
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
        </>
    );
};
export default AdminLayout