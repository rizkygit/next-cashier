import React from 'react'
import { dataSources, columns, } from './data'
import { Table } from 'antd';


const AntdTable = async() => {
    return (
        <>
            <Table columns={columns} dataSource={dataSources} />
        </>
    )
}

export default AntdTable
