"use client"
import React, { useState } from 'react'
import AntdLayout from '@/layout'
import AntdTable from '@/components/table'
import ModalProduct from '@/components/modal/ModalProduct'
// import Link from "next/link";
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const page = () => {
  return (
    <>
      <AntdLayout className="mt-20" ContainerBg="white" BodyBg="#c4c8d0">
        <div className='flex justify-end'>
          <Tooltip title="Add">
            <ModalProduct/>
          </Tooltip>
        </div>
        <AntdTable />
      </AntdLayout>
    </>
  )
}

export default page
