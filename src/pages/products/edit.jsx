import { Button, Form, Input, InputNumber } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

function EditProduct() {
    const { id } = useParams(); //lấy ID từ url
    const [form] = Form.useForm(); //sử dụng useForm để gán dữ liệu cho Form trong antd

    const getDetail = async (id) => { //call api để lấy thông tin chi tiết
        try {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            form.setFieldsValue(data); //biến data được gán vào trong form
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!id) return; //kiểm tra có tồn tại id hay không, không có thì dừng
        getDetail(id); //có thì gọi hàm getDetail();
    }, [id]);

    function onFinish(values) {
        //values là dữ liệu ng dùng nhập vào form
        updateProduct(values); //gọi hàm createProduct để thêm dữ liệu vào database
    };

    const nav = useNavigate();
    const updateProduct = async (data) => {
        try {
            await axios.put(`http://localhost:3000/products/${id}`, data);
            nav('/admin/products');
        } catch {
            console.log("Something went wrong");
        }
    }

    return (
        <div>
            <h1>Đây là trang edit</h1>
            <Form
                name="basic"
                form={form}
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
        </div>
    )
}

export default EditProduct;