import { Col, Row } from 'antd';
import ProductCard from '../components/ProductCard';

function Homepage() {
    const products = [
                {
           "id": 1,
           "name": "Product 1",
           "image": "https://picsum.photos/200",
           "price": 1000000
        },
        {
           "id": 2,
           "name": "Product 2",
           "image": "https://picsum.photos/200",
           "price": 2000000
        },
        {
           "id": 3,
           "name": "Product 3",
           "image": "https://picsum.photos/200",
           "price": 3000000
        },
        {
           "id": 4,
           "name": "Product 4",
           "image": "https://picsum.photos/200",
           "price": 4000000
        },
        {
           "id": 5,
           "name": "Product 5",
           "image": "https://picsum.photos/200",
           "price": 5000000
        },
        {
           "id": 6,
           "name": "Product 6",
           "image": "https://picsum.photos/200",
           "price": 6000000
        }
    ];

    return (
        <div>
            <h1 style={{ textAlign: "center"}}>Homepage</h1>
                <Row>
                    {products.map((p) => (
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={p.id}>
                            {/* C1: gửi riêng lẻ từng prop */}
                            {/* <ProductCard 
                                    id={p.id} 
                                    name={p.name} 
                                    price={p.price} 
                                    image={p.image}
                            /> */}
                            {/* C2: gửi cả object: key={value} */}
                            <ProductCard product={p} />
                        </Col>
                    ))}    
                </Row>
        </div>
    )
}

export default Homepage;