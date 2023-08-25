import React, { useContext } from 'react'
import { IProducts } from '../../interfaces/product'
import { instance } from '../../instances/instance'
import { ProductContext } from '../context'
import { Button, Form, Input, InputNumber, Upload, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;
import type { UploadFile } from 'antd/es/upload/interface';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
    const navigate = useNavigate();
    const { dispatch, isLoading } = useContext(ProductContext)

    const onFinish = async (values: IProducts) => {
        try {
            const data = await instance.post('/products', values)
            dispatch({ type: "ADD_PRODUCT", dispatch: data })
            alert("Thêm thành công");
            setTimeout(() => {
                navigate('/')
            }, 1000)

        } catch (error) {
            console.log(error);

        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        name?: string;
        price?: string;
        description?: string;
        image?: string;
    };
    const fileList: UploadFile[] = [

    ];
    return (
        <div>
            <h2 className='text-center m-3'>Thêm sản phẩm</h2>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="name"
                    name="name"
                    rules={[
                        { required: true, message: 'Vui lòng nhập tên sản phẩm!' },
                        { min: 5, message: 'Tối thiểu 5 kí tự' }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="price"
                    name="price"
                    rules={[
                        { required: true, message: 'Please input your price!' },
                    ]}
                >
                    <InputNumber min={0} className='w-[400px]' />
                </Form.Item>

                <Form.Item<FieldType>
                    label="description"
                    name="description"
                    rules={[
                        { required: true, message: 'Vui lòng nhập mô tả!' },
                        { min: 10, message: 'Tối thiểu 10 kí tự' }
                    ]}
                >
                    <TextArea />
                </Form.Item>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    defaultFileList={[...fileList]}
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ProductAdd