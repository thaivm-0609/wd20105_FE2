import { Layout, Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: "100vh", minWidth: "100vh" }}>
            {/* Sidebar */}
            <Sider collapsible>
                <div
                    className="logo"
                    style={{
                        height: 64,
                        textAlign: "center",
                        color: "white",
                        fontSize: 20,
                        lineHeight: "64px",
                    }}
                >
                    Home
                </div>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="products" icon={<UserOutlined />}>
                        <Link to="/products">Products</Link>
                    </Menu.Item>
                    <Menu.Item key="product-add" icon={<UserOutlined />}>
                        <Link to="/products/add">Add Product</Link>
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Main Content */}
            <Layout style={{ width: "100%" }}>
                <Header
                    style={{ background: "#fff", padding: "0 20px", textAlign: "right" }}
                >
                    <span>User</span>
                </Header>
                <Content style={{ margin: "16px", padding: 24, background: "#fff", flex:1, overflow: "auto" }}>
                    <Outlet /> {/* Render nội dung trang con */}
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;