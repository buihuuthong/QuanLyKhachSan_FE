import { Table } from 'antd'
import React from 'react'
import { AddButton } from './Button'

export const DefautlTable = ({ columns, dataSource, add }) => {
    return(
        <div className='bg-white p-4 rounded-md'>
            <AddButton add={add}/>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    )
}