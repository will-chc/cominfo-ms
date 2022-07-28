import './index.css'
import React, { useMemo, useState } from 'react'
import { Card, Form, Input } from 'antd'
import SlateQuill from '../SlateQuill';
function Publish() {
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };
    return (
        <div className='publish_container'>
            <Card title='发布公告' />
            <div className='announcemetn_content'>
                <Form {...formItemLayout}>
                    <Form.Item
                        label="标题"
                        validateStatus="error"
                        help="请输入标题"
                        required
                    >
                        <Input placeholder="标题" id="error" />
                    </Form.Item>

                    <Form.Item label='内容'>
                        <SlateQuill />
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Publish;