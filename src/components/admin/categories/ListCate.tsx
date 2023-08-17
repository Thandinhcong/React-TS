import { Button, Popconfirm, Skeleton, Table } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import MenuBar from '../../layout/admin/menuBar';
import { useDeleteCategorieMutation, useGetCatesQuery } from '../../../api/CategoriApi';



const ListCate = () => {
    const { data, isLoading, error } = useGetCatesQuery();
    const [deleteCategories, { isLoading: isRemoveDelete }] = useDeleteCategorieMutation();
    if (isLoading) return <Skeleton />
    if (error) return <div>error</div>
    const dataSource = data?.map(({ id, name }) => {
        return {
            key: id,
            name
        }
    });

    const columns: any = [
        {
            key: "name",
            title: 'Name',
            dataIndex: 'name',
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
                            onConfirm={() => deleteCategories(id)}
                            cancelText="no"
                            okText="yes"
                        >
                            <Button danger type='primary' className='m-2'>
                                {isRemoveDelete ? (<div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>) : "Delete"}

                            </Button>
                        </Popconfirm >
                        <Button type='primary' className='bg-yellow-500'><Link to={`/admin/updateCategories/${id}`}>update</Link></Button>
                    </>
                )
            }
        },
    ];

    return (
        <div className='row row-cols-2 '>
            <MenuBar />
            <div className='mt-5 col-9'>
                <Link className='btn btn-primary' to="/admin/addCategories">Add Cate</Link>
                <Table className='' columns={columns} dataSource={dataSource} />
            </div>
        </div>
    )
}

export default ListCate