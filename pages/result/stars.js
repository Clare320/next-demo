import SideMenuLayout from '../../layouts/side-menu-layout'
import Error from 'next/error'

export async function getStaticProps () {
  // 'https://api.github.com/repos/zeit/next.js'
  const url = 'https://www.douban.com/j/app/radio/channels'
  const res = await fetch(url)
  const errorCode = res.ok ? false : res.statusCode
  const json = await res.json()

  return {
    props: {
      errorCode,
      // stars: json.stargazers_count
      stars: json.channels.length
    }
  }
}

export default function Stars ({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <SideMenuLayout title='Stars' menuKey='result/stars'>
      <div>Next stars: {stars}</div>
    </SideMenuLayout>
  )
}
