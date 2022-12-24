import { createRef } from "react";
import classes from "./AddProduct.module.css";
import { addProduct } from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const productNameInputHandler = createRef();
const productPriceInputHandler = createRef();
const productDescriptionInputHandler = createRef();

function AddProduct() {
  const navigate = useNavigate();

  function addProductInputFormHandler(event) {
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
    addProduct(productInformation);
    // console.log(productInformation);
    toast.success('Product Added Succcessfully!');
    navigate('/user/products');
  }

  return (
    <div className={classes.container}>
    <form className={classes.form} onSubmit={addProductInputFormHandler}>
    <center>
          <h1 className={classes.logo}> Add Product</h1>
        </center>
      <div className={classes.inputContainer}>
        <label className={classes.labelWidth} htmlFor="productName">
          Product Name
        </label>
        <input type="text" id="productName" ref={productNameInputHandler} />
      </div>

      <div className={classes.inputContainer}>
        <label className={classes.labelWidth} htmlFor="productPrice">
          Product Price
        </label>
        <input type="number" id="productPrice" ref={productPriceInputHandler} />
      </div>
      <div className={classes.inputContainer}>
        <label className={classes.labelWidth} htmlFor="productDescription">
          Product Description
        </label>
        <textarea
          id="productDescription"
          ref={productDescriptionInputHandler}
          className ={classes.textarea}
        />
      </div>
      <button className={classes.addButton}>Add</button>
    </form>
    </div>
  );
}

export default AddProduct;
