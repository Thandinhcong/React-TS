import React from 'react'
import MenuBar from '../layout/admin/menuBar'
import { Table, Skeleton, Button, Popconfirm } from 'antd';
import { useDeleteProductMutation, useGetProductsQuery } from '../../api/ProductApi';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { data, error, isLoading } = useGetProductsQuery();
    const [removeProduct, { isLoading: isRemoveLoading }] = useDeleteProductMutation();
    if (isLoading) return <Skeleton />
    if (error) return <div>error</div>
    const dataSource = data?.map(({ id, name, price, description, image }) => {
        return {
            key: id,
            name,
            price,
            description,
            image
        }
    })

    const columns: any = [
        {
            key: "name",
            title: 'Name',
            dataIndex: 'name',
        },
        {
            key: "price",
            title: 'Price',
            dataIndex: 'price',
        },
        {
            key: "description",
            title: 'description',
            dataIndex: 'description',
        },
        {
            key: "image",
            title: 'image',
            dataIndex: 'image',
        },
        {
            key: "actions",
            title: 'actions',
            render: ({ key: id }: any) => {
                return (
                    <>
                        <Popconfirm
                            placement='topLeft'
                            title={"Có muốn xóa không em?"}
                            onConfirm={() => removeProduct(id)}
                            cancelText="no"
                            okText="yes"
                        >
                            <Button danger type='primary' className='m-2'>Delete</Button>

                        </Popconfirm >
                        <Button type='primary' >Update</Button>
                    </>
                )
            }
        },
    ];

    return (
        <div className='row row-cols-2 '>
            <MenuBar />
            <div className='mt-5 col-9'>
                <Link className='btn btn-primary' to="/admin/add">Add Product</Link>
                <Table className='' columns={columns} dataSource={dataSource} />
            </div>
        </div>
    )
}

export default ProductList