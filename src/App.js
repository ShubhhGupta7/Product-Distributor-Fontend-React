import { Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Products from "./components/Product/Products";
import Destributors from "./components/Destributer/Destributors";

import AddProduct from './components/DestributionManager/AddProduct';
function App() {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />

      <Route path="/manager/add-product"exact element={<AddProduct/>} />

      <Route path="/products" exact element={<Products/>} />
      <Route path="/destributors" exact element={<Destributors/>} />
    </Routes>
  );
}

export default App;
