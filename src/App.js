import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.css'

import MainContent from './MainContent'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Categories</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <MainContent />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Freeschool.org.in contributors (c) 2020</Footer>
    </Layout>
  );
}

export default App;
