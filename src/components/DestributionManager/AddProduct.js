import { createRef } from "react";
import classes from "./AddProduct.module.css";

const productNameInputHandler = createRef();
const productPriceInputHandler = createRef();
const productDescriptionInputHandler = createRef();

function Register() {
  function registerInputFormHandler(event) {
    event.preventDefault();
    const enteredProductName = productNameInputHandler.current.value;
    const enteredProductPrice = productPriceInputHandler.current.value;
    const enteredProductDesciption =
      productDescriptionInputHandler.current.value;

    const productInformation = {
      productName: enteredProductName,
      productPrice: enteredProductPrice,
      productDescription: enteredProductDesciption,
    };
    console.log(productInformation);
  }

  return (
    <form onSubmit={registerInputFormHandler}>
      <label htmlFor="productName">Product Name</label>
      <input type="text" id="productName" ref={productNameInputHandler} />

      <label htmlFor="productPrice">Product Price</label>
      <input type="number" id="productPrice" ref={productPriceInputHandler} />

      <label htmlFor="productDescription">Product Description</label>
      <textarea id="productDescription" ref={productDescriptionInputHandler} />

      <button>Add Product</button>
    </form>
  );
}

export default Register;
