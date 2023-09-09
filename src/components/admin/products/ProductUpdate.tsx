import React, { useEffect } from 'react';
import { Button, message, Form, Input, Upload, Skeleton, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import MenuBar from '../../layout/admin/menuBar';
import { useGetByIdQuery, useUpdateProductMutation } from '../../../api/ProductApi';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../loading';


const ProductAdd = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [updateProduct, { isLoading: isUpdateLoading }] = useUpdateProductMutation();
    const { data: productData, isLoading } = useGetByIdQuery(id || "");
    const [form] = Form.useForm();
    console.log("product", productData);

    useEffect(() => {
        form.setFieldsValue({
            name: productData?.name,
            price: productData?.price,
            description: productData?.description,
            image: productData?.image,
        })
    }, [productData])
    if (isLoading) return <Loading />
    const onFinish = (values: any) => {
        updateProduct({
            ...values,
            id: id
        })
            .unwrap()
            .then(() => {
                return navigate('/admin')
            })
        console.log('Success:', values);
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
    const props: UploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <div className='row row-cols-2'>
            <MenuBar />
            <div className='col-9'>
                <h2 className=' mt-10 ms-80 mb-10'>Cập nhật sản phẩm</h2>
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
                >
                    <Form.Item<FieldType>
                        label="name"
                        name="name"
                        rules={[
                            { required: true, message: 'Please input your username!' },
                            { min: 5, message: 'Tối thiểu 5 kí tự!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="price"
                        name="price"
                        rules={[
                            { required: true, message: 'Please input your price!' }
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Upload {...props}
                        className='ml-[200px]' >
                        <Button className='mb-10' icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    <Form.Item<FieldType>
                        label="mô tả"
                        name="description"
                        rules={[
                            { required: true, message: 'Vui lòng nhập mô tả!' },
                            { min: 20, message: 'Tối thiểu 10 kí tự!' },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" danger htmlType="submit">
                            {isUpdateLoading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) :
                                "Submit"
                            }
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}

export default ProductAdd