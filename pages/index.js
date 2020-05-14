import Head from 'next/head'
import { Menu, Button } from 'antd'
import { DashboardOutlined } from '@ant-design/icons'
const { SubMenu } = Menu

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nextjs示例</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Test</h1>
      <Button type="primary">Antd-Button</Button>
      <Menu>
        <SubMenu
          key="dashboard"
          title={
            <span>
              <DashboardOutlined />
              仪表板
            </span>
          }
        >
          <Menu.Item
            key="dashboard1"
          >
            分析页
          </Menu.Item>
          <Menu.Item
            key="dashboard1"
          >
            工作台
          </Menu.Item>
        </SubMenu>
      </Menu>

    </div>
  )
}
