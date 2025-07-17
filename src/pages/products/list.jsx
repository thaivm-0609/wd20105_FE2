import { Table, Image, Button, Space, Popconfirm } from 'antd';

function ListProduct() {
    //dữ liệu hiển thị trong bảng
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
                    <Space>
                        <Button type="primary">Edit</Button>
                        <Popconfirm
                            title="Bạn có chắc chắn không?"
                            okText="Có"
                            cancelText="Không"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]

    return (
        <div>
            <h1>Đây là trang danh sách</h1>
            <Table dataSource={data} columns={columns} rowKey="id"/>
        </div>
    )
}

export default ListProduct;