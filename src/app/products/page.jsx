import React from 'react'
import AntdLayout from '../component/antd-layout'
import AntdTable from '../component/table'

const page = () => {
  return (
    <>
      <AntdLayout className="mt-20" ContainerBg="white" BodyBg="#c4c8d0">
        product pages
        <AntdTable/>
      </AntdLayout>
    </>
  )
}

export default page
