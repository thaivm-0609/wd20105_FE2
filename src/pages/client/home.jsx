import { Row, Col, Space } from 'antd';
import ProductCart from '../components/ProductCard';

function Homepage() {
    const products = [
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
        },
        {
           "id": 4,
           "name": "Product 3",
           "image": "https://picsum.photos/200/300",
           "price": 3000000
        },
        {
           "id": 5,
           "name": "Product 3",
           "image": "https://picsum.photos/200/300",
           "price": 3000000
        }
    ];

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Homepage</h1>
            <Row gutter={[16, 16]}>
                { products.map((product) => (
                    <Col span={6} key={product.id}>
                        <ProductCart product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Homepage;