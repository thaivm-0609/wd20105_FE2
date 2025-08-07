import { Table, Image, Button, Popconfirm } from 'antd';
// import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getList } from '../../providers/product';

function ListProduct() {
    //dữ liệu hiển thị trong bảng
    // const data = [
    //     {
    //        "id": 1,
    //        "name": "Product 1",
    //        "image": "https://picsum.photos/200/300",
    //        "price": 1000000
    //     },
    //     {
    //        "id": 2,
    //        "name": "Product 2",
    //        "image": "https://picsum.photos/200/300",
    //        "price": 2000000
    //     },
    //     {
    //        "id": 3,
    //        "name": "Product 3",
    //        "image": "https://picsum.photos/200/300",
    //        "price": 3000000
    //     }
    // ];

    //lưu trữ biến products vào trong state
    // const [products, setProducts] = useState(data);
    // const [products, setProducts] = useState([]);
    //khai báo hàm lấy danh sách sản phẩm
    // const getList = async () => {
    //     try {
    //         //B1: call api để lấy dữ liệu: await axios.method('apiUrl', ?data);
    //         const { data } = await axios.get("http://localhost:3000/products");
    //         //B2: gán dữ liệu vào cho biến products
    //         // setProducts(data);
    //         return data;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const { data , isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: () => getList({ resource: "products" }),
    })

    //khai báo hàm xóa sản phẩm
    // const handleDelete = async (id) => {
    //     // const newProducts = products.filter(product => product.id != id);
    //     // setProducts(newProducts);
    //     //call api
    //     try {
    //         await axios.delete(`http://localhost:3000/products/${id}`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    
    // useEffect(() => {
    //     getList()//gọi hàm getList
    // }, [products]);
    //khai báo cột xuất hiện trong bảng
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => {
                return <Image src={image} />
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            render: (product) => {
                return (
                    <>
                        <Button>
                            <Link to={`/admin/products/${product.id}/edit`}>Edit</Link>
                        </Button>
                        <Popconfirm
                            title="Delete the task"
                            description="Bạn có chắc không?"
                            onConfirm={() => handleDelete(product.id)}
                            okText="Đồng ý"
                            cancelText="Hủy"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    </>
                )
            }
        }
    ]

    return (
        <div>
            <h1>Đây là trang danh sách</h1>
            <Table dataSource={data} columns={columns} key="id" isLoading={isLoading}/>
        </div>
    )
}

export default ListProduct;