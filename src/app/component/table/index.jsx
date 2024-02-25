"use server"
import React from 'react'
import { dataSource, columns } from './data'
import { Space, Table, Tag } from 'antd';


const AntdTable = () => {
    return (
        <>
            <Table columns={columns} dataSource={dataSource} />
        </>
    )
}

export default AntdTable
