import { Button, Form, Input, InputNumber } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

function EditProduct() {
    function onFinish(values) {
        //values là dữ liệu ng dùng nhập vào form
        updateProduct(values); //gọi hàm createProduct để thêm dữ liệu vào database
    };


    const { id } = useParams();
    const [form] = Form.useForm();
    const nav = useNavigate();

    const getDetail = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            form.setFieldsValue(data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async (data) => {
        try {
            await axios.put(`http://localhost:3000/products/${id}`, data);
            nav('/admin/products');
        } catch (error) {   
            console.log(error);
        }
    }

    useEffect(() => {
        if (!id) return;
        getDetail(id);
    }, [id]);

    return (
        <div>
            <h1>Đây là trang chi tiết</h1>
            <Form
                form={form}
                onFinish={onFinish}
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
        </div>
    )
}

export default EditProduct;