import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useHistory } from "react-router";

const { Header, Content, Footer } = Layout;

const Container =({children, isLogin})=>{
  const history=useHistory();

  const logout=()=>{
    history.push('/login')
  }

  return(
  <Layout>
    {!isLogin && 
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{float:'right'}}>
          <Menu.Item key="1" onClick={()=>logout()} >Salir</Menu.Item>
        </Menu>
      </Header>
    }
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {!isLogin && <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>}
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380, alignItems:'center', justifyContent:'center'}}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
  )
}
export default Container;
