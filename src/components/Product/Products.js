import Product from "./Product";
import classes from "./Products.module.css";
import { getProducts } from "../../store";
import { useState } from "react";
const products = getProducts();

function Products() {
  const [productDeleted, setProductDeleted] = useState(0);

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
            setProductDeleted = {setProductDeleted}
            productDeleted = {productDeleted}
          />
        );
      })}
    </ul>
  );
}

export default Products;
