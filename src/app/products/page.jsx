import React from 'react'
import AntdLayout from '../component/antd-layout'
import AntdTable from '../component/table'
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const page = () => {
  return (
    <>
      <AntdLayout className="mt-20" ContainerBg="white" BodyBg="#c4c8d0">
        <div className='flex justify-end'>
          <Tooltip title="Add">
            <Button type="primary" icon={<PlusOutlined/>} />
          </Tooltip>
        </div>
        <AntdTable />
      </AntdLayout>
    </>
  )
}

export default page
