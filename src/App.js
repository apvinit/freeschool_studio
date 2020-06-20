import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './index.css'

import MainContent from './MainContent'
import { Link, useLocation } from 'react-router-dom';
import Sider from 'antd/lib/layout/Sider';
import { UserOutlined } from '@ant-design/icons';

const {Header, Content, Footer } = Layout

function App() {

  let location = useLocation()

  return (
    <Layout>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}>
        <div style={{
          color: "lightgray",
          fontSize: 24,
          padding: '8px',
          textAlign: 'center'
        }}>Freeschool</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key="/categories">
            <Link to="/categories">
              Categories
            </Link>
          </Menu.Item>
          <Menu.Item key="/courses">
            <Link to="/courses">
              Courses
            </Link>
          </Menu.Item>
          <Menu.Item key="/modules">
            <Link to="/modules">
              Modules
            </Link>
          </Menu.Item>
          <Menu.Item key="/lessons">
            <Link to="/lessons">
              Lessons
            </Link>
          </Menu.Item>
          <Menu.Item key="/contents">
            <Link to="/contents">
              Contents
            </Link>
          </Menu.Item>
          <Menu.Item key="/tags">
            <Link to="/tags">
              Tags
            </Link>
          </Menu.Item>
          <Menu.Item key="/languages">
            <Link to="/languages">
              Languages
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{textAlign: 'right'}}>
          <Avatar style={{backgroundColor : 'magenta'}} icon={<UserOutlined />}/>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <MainContent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Freeschool.org.in contributors (c) 2020</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
