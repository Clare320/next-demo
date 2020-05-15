import SideMenuLayout from '../layouts/side-menu-layout'

export default function Home () {
  return (
    <div>
      <SideMenuLayout home={false} title='Next示例'>
        <div><span>根页--Nextjs大法好</span></div>
      </SideMenuLayout>
    </div>
  )
}
