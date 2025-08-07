import { Button, Form, Input, InputNumber } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getDetail, updateProduct } from '../../providers/product';

function EditProduct() {
    const { id } = useParams(); //lấy ID từ url
    const [form] = Form.useForm(); //sử dụng useForm để gán dữ liệu cho Form trong antd
    const nav = useNavigate();
    // const getDetail = async (id) => { //call api để lấy thông tin chi tiết
    //     try {
    //         const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    //         form.setFieldsValue(data); //biến data được gán vào trong form
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     if (!id) return; //kiểm tra có tồn tại id hay không, không có thì dừng
    //     getDetail(id); //có thì gọi hàm getDetail();
    // }, [id]);
    
    //sử dụng useQuery để lấy chi tiết sản phẩm
    const { data: product } = useQuery({
        queryKey: ["product"],
        queryFn: () => getDetail({resource: "products", id}),
    })
    
    useEffect(() => {
        if (!product) return;
        form.setFieldsValue(product)
    }, [product]);

    //sử dụng useMutation để cập nhật dữ liệu
    const { mutate } = useMutation({
        mutationFn: (values) => updateProduct({ resource: "products", id, values}),
        onSuccess: () => { //xu ly khi thanh cong
            alert("Cập nhật thành công");
            nav('/admin/products');
        },
        onError: () => { //xu ly loi
            console.log("Lỗi rồi")
        },
    })

    function onFinish(values) {
        //values là dữ liệu ng dùng nhập vào form
        mutate(values); //gọi hàm mutate
    };

    // const updateProduct = async (data) => {
    //     try {
    //         await axios.put(`http://localhost:3000/products/${id}`, data);
    //         nav('/admin/products');
    //     } catch {
    //         console.log("Something went wrong");
    //     }
    // }

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