import "./index.css";
import { useEffect, useState,useRef } from 'react'
import { Table, Card, Button, Modal, message } from "antd";
function MessageManagae() {
    const tableRef = useRef(null);
    const [data, setData] = useState<Array<object>>([]);
    useEffect(() => {
        (async function getData() {
            //请求数据
            //模拟假数据
            const asyncData = [
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                {
                    id: '1',
                    title: '111',
                    author: 'jdklsjfal'
                },
                
            ]
            setData(asyncData);
        })();


    }, [])
    //定义表头
    const columns = [
        {
            title: 'id',
            dataIndex: 'id'
        },
        {
            title: '标题',
            dataIndex: 'title'
        }, {
            title: '作者',
            dataIndex: 'author'
        },
        {
            title: '删除',
            dataIndex: 'edit',
            render: (text,record,index) => {
                return (<Button onClick={()=>{delecte(index)}} type="primary" danger>删除</Button>)
            }
        }
    ]
    function delecte(index) {
        const n_data = [...data]
        n_data.splice(index,1)
        setData(n_data)
    }
    return (
        <div className="m_container">
            <div className="message_list">
                <Card title='公告信息'>
                    <Table
                     ref={tableRef} dataSource={data} columns={columns} />
                </Card>
            </div>
        </div>
    )
}
export default MessageManagae;