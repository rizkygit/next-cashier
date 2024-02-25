"use client"
import React, { useState } from 'react';
import { Layout, theme } from 'antd';
const { Header, Content, Sider } = Layout;
import Menu from './Menu';

const AntdLayout = ({ children, BodyBg, ContainerBg }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100dvh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div />
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
    );
};
export default AntdLayout