import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
const { Header, Sider, Footer, Content} = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function MainLayout () {
    const items = [
        getItem('Home', '1', <PieChartOutlined />),
        getItem('Product List', '2', <DesktopOutlined />), 
    ];
    return (
        <Layout style={{minHeight:"100vh"}}>
            {/* sidebar */}
            <Sider collapsed>
                <div>WD20105</div>
                <Menu theme='dark' mode='inline' items={items} />
            </Sider>

            <Layout>
                {/* header */}
                <Header>
                    <p>Username</p>    
                </Header> 
                <Content>
                    {/* outlet: đánh dấu phần nội dung page thay đổi */}
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout;