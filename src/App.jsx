import { useRoutes } from 'react-router'; //sử dụng useRoutes để điều hướng
import MainLayout from './layouts/main';
import ListProduct from './pages/products/list';
import Homepage from './pages/home';
import CreateProduct from './pages/products/create';

function App() {
  const routes = useRoutes([
    { //trang admin
      path: '/admin',//đường dẫn
      element: <MainLayout />, //sử dụng mainlayout cho màn admin
      children: [
        {
          path: 'products', //url: /admin/products
          element: <ListProduct />, 
        },
        {
          path: 'products/create',
          element: <CreateProduct/>
        }
      ]
    },
    { //trang client
      path: '', 
      element: <Homepage/>
    }
  ]);

  return (
    <div style={{width: "100vw"}}>
      {routes}
    </div>
  )
}

export default App
