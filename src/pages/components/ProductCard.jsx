import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function ProductCart({product}) {
    return (
        <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="image" src={product.image} />}
            actions={[
                <Button type='primary'>
                    <Link to={`/products/${product.id}`}>Buy now</Link>
                </Button>
            ]}
        >
            <Meta title={product.name} description={product.price} />
        </Card>
    );
}

export default ProductCart;