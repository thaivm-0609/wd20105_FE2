import { Table, Image, Space, Button, Popconfirm } from 'antd'
import { Link } from 'react-router-dom';

function Product() {
    const data = [
        {
            "id": 1,
            "name": "Product 1",
            "image": "https://picsum.photos/200/300",
            "price": 1000000
        },
        {
            "id": 2,
            "name": "Product 2",
            "image": "https://picsum.photos/200/300",
            "price": 2000000
        },
        {
            "id": 3,
            "name": "Product 3",
            "image": "https://picsum.photos/200/300",
            "price": 3000000
        }
    ];
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
            render: (img) => {
                return <Image src={img} width={100}/>;
            },
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
                    <Space>
                        <Button type='primary'>
                            <Link to={``}>Edit</Link>
                        </Button>
                        <Popconfirm>
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];

    return (
        <main>
            <h1>Danh sách sản phẩm</h1>
            <Table dataSource={data} columns={columns} rowKey="id"/>
        </main>
    )
}

export default Product;