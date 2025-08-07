import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

//get list 
export const getList = async ({ resource = "products "}) => {
    const { data } = await axios.get(resource);
    
    return data;
}

//get detail
export const getDetail = async ({ resource = "products", id }) => {
    if (!id) return;
    const { data } = await axios.get(`${resource}/${id}`);

    return data;
}

//create
export const createProduct = async ({ resource = "products", values}) => {
    const { data } = await axios.post(resource, values);

    return data;
}

//update
export const updateProduct = async ({ resource = "products", id, values}) => {
    if (!id) return;
    const { data } = await axios.put(`${resource}/${id}`, values);

    return data;
}

//delete
export const deleteProduct = async ({resource = "products", id}) => {
    if (!id) return;
    const { data } = await axios.delete(`${resource}/${id}`);

    return data;
}