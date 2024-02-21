"use client"
import React, { Children, useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import NavigationItems from './NavigationItems';

const { Header, Content, Footer, Sider } = Layout;

const AntdLayout = ({ children, BodyBg, ContainerBg }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <NavigationItems />
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