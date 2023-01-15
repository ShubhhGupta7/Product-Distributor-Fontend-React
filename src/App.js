import { Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import ProductList from "./pages/ProductList";
import DistributorList from "./pages/DistributorList";
import Cart from "./components/Cart/Cart";
import AddProductPage from "./pages/AddProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import PageNotFound from "./pages/PageNotFound";
import BarLoader from "react-spinners/BarLoader";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";

import ApplicationStatusContext from "./store/status-context";
import { useContext } from "react";

const isLoading = true;
function App() {
  const applicationStatusContext = useContext(ApplicationStatusContext);

  return (
    <main>
      <ToastContainer />
      <BarLoader
        color="rgb(41 101 221)"
        cssOverride={{
          width: "100%",
          backgroundColor: "#3030d7",
          position: "fixed",
          top: "0",
          zIndex: "10",
        }}
        height={5}
        loading={applicationStatusContext.status === "pending"}
        speedMultiplier={1.2}
        width={0}
      />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user" element={<PrivateRoute />}>
          <Route path="products" element={<ProductList />} />
          <Route path="distributors" element={<DistributorList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route
            path="update-product/:productId"
            element={<UpdateProductPage />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
