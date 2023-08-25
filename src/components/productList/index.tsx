import React, { useContext, useEffect } from 'react'
import { Table, Image, Skeleton, Popconfirm, Button } from 'antd';
import { ProductContext } from '../context';
import { instance } from '../../instances/instance';
import { Link } from 'react-router-dom';


const Home = () => {
    const { state, dispatch } = useContext(ProductContext);
    console.log({ state });

    useEffect(() => {
        const fetch_products = async () => {
            try {
                const data = await instance.get("/products");
                dispatch({ type: "FETCH_PRODUCTS", payload: data })

            } catch (error) {
                console.log(error);
            }
        };
        fetch_products()
    }, [])
    const handleDelete = async (id: number) => {
        try {
            const deleteProduct = await instance.delete("/products/" + id)
            dispatch({ type: "REMOVE_PRODUCT", payload: deleteProduct })
        } catch (error) {
            console.log(error);

        }
    }
    if (state.isLoading) return <Skeleton active />
    const dataSource = state?.products?.map(({ id, name, price, description, image }) => {
        return {
            key: id,
            name,
            price,
            description,
            image
        }
    }) || []
    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },

        {
            title: 'Image',
            key: 'image',
            dataIndex: "image",
            render: (text: string) => <Image src={text} width={80} />,
        },
        {
            title: "actions",
            render: ({ key: id }: any) => {
                return <>
                    <Popconfirm
                        placement='topLeft'
                        title={"Có muốn xóa không em?"}
                        onConfirm={() => handleDelete(id)}
                        okText="yes"
                        cancelText="no"
                    >
                        <Button danger type='primary' className='m-2'>
                            Delete
                        </Button>
                    </Popconfirm >
                    <Button type='primary' className='bg-yellow-500'><Link to={`/admin/update/${id}`}>update</Link></Button>
                </>
            }
        }
    ];


    return (
        <Table columns={columns} dataSource={dataSource} />

    )
}

export default Home