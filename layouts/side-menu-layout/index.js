import React from 'react'
import { Layout, Menu, Button } from 'antd'
import { DashboardOutlined, MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined } from '@ant-design/icons'
import styles from './index.less'
import Router from 'next/router'
import Head from 'next/head'
const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

export default function SideMenuLayout ({ home = true, title, children }) {
  const [collapsed, setCollapsed] = React.useState(false)
  const toggle = () => {
    setCollapsed(value => !value)
  }

  const handleMenuClick = ({ item, key, keyPath, domEvent }) => {
    Router.push('/' + key)
  }
  const goHome = () => {
    // Router.push('/')
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sider collapsible trigger={null} collapsed={collapsed}>
        <div className={styles.logo}><span className={styles.logoName}>马办</span></div>
        <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} onClick={handleMenuClick}>
          <SubMenu
            key='dashboard'
            icon={<DashboardOutlined />}
            title='仪表板'
          >
            <Menu.Item
              key='dashboard/analysis'
            >
              分析页
            </Menu.Item>
            <Menu.Item
              key='dashboard/workplace'
            >
              工作台
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key='result'
            icon={<BellOutlined />}
            title='结果页'
          >
            <Menu.Item key='result/success'>成功页</Menu.Item>
            <Menu.Item key='result/failure'>失败页</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header className={styles.header}>
          {
            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: toggle
            })
          }
          {home && <Button type='primary' onClick={goHome}>回到主页</Button>}
        </Header>
        <Content className={styles.siteLayoutBackground}>{children}</Content>
        <Footer>Footer123</Footer>
      </Layout>
    </Layout>
  )
}
