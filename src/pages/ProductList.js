import Products from "../components/Product/Products";
import classes from "./ProductList.module.css";
import NavBar from "../components/NavBar";

function ProductList() {
  return (
    <div>
      <NavBar />
      <Products />
    </div>
  );
}

export default ProductList;
