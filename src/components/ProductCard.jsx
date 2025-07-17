import { Card, Button } from 'antd';
const { Meta } = Card;
//cú pháp:
//function TenComponent({key1, key2, ...})
// function ProductCard({id,name,price,image}) {
function ProductCard({product}) {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={product.image}
                />
            }
            actions={[
                <Button>Buy now</Button>
            ]}
        >
            <Meta
                title={product.name}
                description={product.price}
            />
        </Card>
    )
}

export default ProductCard