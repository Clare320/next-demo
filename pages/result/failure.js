import Link from 'next/link'
import { Result, Button, Typography } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import SideMenuLayout from '../../layouts/side-menu-layout'

const { Paragraph, Text } = Typography

export default function Failure () {
  return (
    <SideMenuLayout title='失败页' menuKey='result/failure'>
      <Result
        status='error'
        title='发布失败'
        subTitle='您发布的信息有敏感词汇，请核对后再发布！'
        extra={[
          <Button type='primary' key='contact'>联系客服</Button>,
          <Button key='resubmit'>重新提交</Button>
        ]}
      >
        <div className='desc'>
          <Paragraph>
            <Text>提交内容有以下错误：</Text>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined />您的账户已被冻结 <Link href='/pages/sale'><a>立即解冻</a></Link>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined />您的账户权限不够 <a>申请权限</a>
          </Paragraph>
        </div>
      </Result>
    </SideMenuLayout>
  )
}
