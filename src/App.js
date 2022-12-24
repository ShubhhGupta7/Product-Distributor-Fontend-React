import { Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import ProductList from "./pages/ProductList";
import DistributorList from "./pages/DistributorList";
import Cart from "./components/Cart";
import AddProductPage from './pages/AddProductPage';
import UpdateProductPage from "./pages/UpdateProductPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <main>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />

        <Route path="/user" element={<PrivateRoute />}>
          <Route path="products" element={<ProductList />} />
          <Route path="destributors" element={<DistributorList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="update-product/:productId" element={<UpdateProductPage/>} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
