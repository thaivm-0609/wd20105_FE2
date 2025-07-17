import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Footer, Content} = Layout;


function ClientLayout () {
    return (
        <Layout style={{minHeight:"100vh"}}>
            <Layout>
                {/* header */}
                <Header style={{ background: "#fff", padding: "0 20px", textAlign: "left" }}>
                    <p>WD20105</p>    
                </Header> 
                <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
                    {/* outlet: đánh dấu phần nội dung page thay đổi */}
                    <Outlet />
                </Content>
                <Footer style={{ background: "#fff", padding: "0 20px", textAlign: "center" }}>
                    <p>WD20105 - Lập trình frontend framework 2</p>
                    <p>P306 - FPoly Trịnh Văn Bô</p>
                </Footer>
            </Layout>
        </Layout>
    )
}

export default ClientLayout;