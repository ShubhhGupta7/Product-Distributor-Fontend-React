import Product from "./Product";
import classes from "./Products.module.css";

import { getProducts } from "../../store";
const products = getProducts();

function Products() {
  return (
    <ul className={`d-flex justify-content-around flex-wrap ${classes.list}`}>
      {products.map((product) => {
        return (
          <Product
            key={product.productId}
            productName={product.productName}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
            productId = {product.productId}
          />
        );
      })}
    </ul>
  );
}

export default Products;
