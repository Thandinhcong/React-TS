import React from 'react'
import { Button, Form, Input, Skeleton, message } from 'antd';
import { useSignupMutation } from '../../api/auths';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../loading';

const Signup = () => {
    const [form] = Form.useForm();
    const [signup, { error, isLoading }] = useSignupMutation();
    const [messageApi, contextHolder] = message.useMessage();
    const defaultRole = "member";
    const navigate = useNavigate();
    if (isLoading) return <Loading />
    const onFinish = (values: any) => {
        signup(
            {
                ...values,
                role: values.role || defaultRole
            }
        )
            .unwrap()
            .then(() => {
                messageApi.open({
                    type: "success",
                    content: "sign up is successfully"
                })
                setTimeout(() => {
                    navigate('/login')
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
            content: error.data,
        });
    }
    return (
        <>
            <h2 className='text-center m-5'>Đăng kí tài khoản</h2>
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
                <p className='ml-[200px]'>Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Signup