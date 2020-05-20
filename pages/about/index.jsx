import Head from 'next/head'
import Router from 'next/router'
import { Button } from 'antd'
export default function About ({ name }) {
  const goHomePage = () => {
    Router.replace('/')
  }

  return (
    <div style={{
      font: '15px Helvetica, Arial, sans-serif',
      background: '#eee',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'top',
      alignItems: 'center',
      minHeight: 400
    }}
    >
      <Head>
        <title>关于{name}</title>
      </Head>
      <h1>关于</h1>
      <div>自强不息，厚德载物</div>
      <p key='app_locale'>NEXT_PUBLIC_APP_LOCALE：{process.env.NEXT_PUBLIC_APP_LOCALE}</p>
      <Button onClick={goHomePage}>回到主页</Button>
    </div>
  )
}

export async function getStaticProps (context) {
  return {
    props: {
      name: '可得'
    }
  }
}
