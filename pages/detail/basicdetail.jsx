import Link from 'next/link'
import { Descriptions, Divider, Table } from 'antd'
import SideMenuLayout from '../../layouts/side-menu-layout'

export default function BasicDetail ({ detail }) {
  const { refund, user, refundList } = detail
  const { pickUpOrderId, state, saleOrderId, subOrderId } = refund
  const { name, tel, express, address, remarks } = user
  const refundListResult = (() => {
    let count = 0
    let amount = 0
    refundList.forEach(goods => {
      count += goods.count
      amount += goods.amount
    })
    return refundList.concat([{
      goodsId: '总计',
      count,
      amount
    }])
  })()

  const columns = [
    {
      key: 'goodsId',
      title: '商品编号',
      dataIndex: 'goodsId',
      render: (text) => {
        if (text === '总计') {
          return text
        } else {
          return <a>{text}</a>
        }
      }
    },
    {
      key: 'goodsName',
      title: '商品名称',
      dataIndex: 'goodsName'
    },
    {
      key: 'goodsBarCode',
      title: '商品条码',
      dataIndex: 'goodsBarCode'
    },
    {
      key: 'price',
      title: '单价',
      dataIndex: 'price'
    },
    {
      key: 'count',
      title: '数量（件）',
      dataIndex: 'count'
    },
    {
      key: 'amount',
      title: '金额',
      dataIndex: 'amount'
    }
  ]

  return (
    <SideMenuLayout title='基础详情' menuKey='detail/basicdetail'>
      <Descriptions title='退款申请'>
        <Descriptions.Item label='取货单号'>{pickUpOrderId}</Descriptions.Item>
        <Descriptions.Item label='状态'>{state}</Descriptions.Item>
        <Descriptions.Item label='销售单号'>{saleOrderId}</Descriptions.Item>
        <Descriptions.Item label='子订单'>{subOrderId}</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions title='用户信息'>
        <Descriptions.Item label='用户姓名'>{name}</Descriptions.Item>
        <Descriptions.Item label='联系电话'>{tel}</Descriptions.Item>
        <Descriptions.Item label='常用快递'>{express}</Descriptions.Item>
        <Descriptions.Item label='取货地址'>{address}</Descriptions.Item>
        <Descriptions.Item label='备注'>{remarks}</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Table columns={columns} dataSource={refundListResult} rowKey='goodsId' pagination={false} />
      <div style={{ marginTop: 20 }}>
        <Link href='/about'><a>关于</a></Link>
      </div>
    </SideMenuLayout>
  )
}

export async function getStaticProps (context) {
  const data = await fetch('http://localhost:3000/api/basicdetail')
  const detail = await data.json()

  return {
    props: {
      detail
    }
  }
}
