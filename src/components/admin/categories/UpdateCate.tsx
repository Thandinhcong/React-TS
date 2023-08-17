import React, { useEffect } from 'react'
import MenuBar from '../../layout/admin/menuBar'
import { Button, Form, Input, Skeleton } from 'antd'
import { useGetCateByIdQuery, useUpdateCategorieMutation } from '../../../api/CategoriApi'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateCate = () => {
    const navigate = useNavigate();
    const { idCate } = useParams();
    const { data: cateData, isLoading } = useGetCateByIdQuery(idCate || '');
    const [updateCate] = useUpdateCategorieMutation();
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            name: cateData?.name
        })
    }, [cateData])
    if (isLoading) return <Skeleton />
    const onFinish = (values: any) => {
        updateCate({
            ...values,
            id: idCate
        })
            .unwrap()
            .then(() => {
                return navigate('/admin/categories')
            })
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        name?: string;
    };
    return (
        <div className='row row-cols-2'>
            <MenuBar />
            <div className='col-9'>
                <h2 className=' mt-10 ms-80 mb-10'>Thêm Danh mục</h2>
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
                            { required: true, message: 'Nhập tên danh mục!' },
                            { min: 5, message: 'Tối thiểu 5 kí tự!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" danger htmlType="submit">
                            {isLoading ? (<div>Đợi tí</div>) : (
                                "Submit"
                            )}
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}

export default UpdateCate