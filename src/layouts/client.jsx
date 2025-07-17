import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Content} = Layout;

function ClientLayout () {
    return (
        <Layout style={{minHeight:"100vh"}}>
            {/* header */}
            <Header style={{ background: "#fff", padding: "0 20px", textAlign: "center" }}>
                <p>WD20105</p>    
            </Header> 
            <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
                {/* outlet: đánh dấu phần nội dung page thay đổi */}
                <Outlet />
            </Content>
            <Footer style={{ background: "#fff", padding: "0 20px", textAlign: "center" }}>
                <p>WD20105 - Frontend Framework 2</p>
                <p>FPoly</p>
            </Footer>
        </Layout>
    )
}

export default ClientLayout;