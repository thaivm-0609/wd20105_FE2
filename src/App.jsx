import { useRoutes } from 'react-router';
import Product from './pages/products/list';
import MainLayout from './layouts/main';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "products", // url: /products
          element: <Product/>,
        }
      ]
    }
  ])
  
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {routes}
    </div>
  );
}

export default App
