import { Button, Form, Input, InputNumber } from 'antd';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { createProduct } from '../../providers/product';

function CreateProduct() {
    const nav = useNavigate();
    // const createProduct = async (data) => {
    //     try {
    //         axios.post('http://localhost:3000/products', data);
    //         nav('/admin/products');
    //     } catch {
    //         console.log("Something went wrong");
    //     }
    // }

    const { mutate } = useMutation({
        mutationFn: (values) => createProduct({resource: "products", values}),
        onSuccess: () => {
            alert("Thêm mới thành công");
            nav('/admin/products');
        },
        onError: () => {
            console.log("Thêm mới thất bại");
        }
    })
    function onFinish(values) { //values là dữ liệu ng dùng nhập vào form
        mutate(values); //gọi hàm mutate
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ 
                price: {
                    Number: 0,
                } 
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    { required: true, message: 'Name is required!' },
                    { min: 3, message: "Name is longer than 3 characters"},
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Image"
                name="image"
                rules={[{ required: true, message: 'Image is required!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
                rules={[
                    { required: true, message: 'Price is required'},
                    { type: "number", min: 0, message: "Price is greater than 0"}
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )

}

export default CreateProduct;