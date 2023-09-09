import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { useSigninMutation, } from '../../api/auths';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../loading';

const Login = () => {
    const [form] = Form.useForm();
    const [signin, { error, isLoading }] = useSigninMutation();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    if (isLoading) return <Loading />

    const onFinish = (values: any) => {
        signin(values)
            .unwrap()
            .then(() => {
                messageApi.open({
                    type: "success",
                    content: "Login is successfully"
                })
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            })
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        email?: string;
        password?: string;
    };
    if (error) {
        messageApi.open({
            type: "error",
            content: error?.data,
        });
    }
    return (
        <>
            <h2 className='text-center m-5'>Đăng nhập tài khoản</h2>
            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className=''
            >
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your Email!' },
                        { type: 'email', message: 'email khong dung dinh dang!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Tối thiểu 6 ký tự!' }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <p className='ml-[200px]'>Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link></p>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Login