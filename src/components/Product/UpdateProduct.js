import { createRef } from "react";
import classes from "./UpdateProduct.module.css";
import { updateProduct, getProduct } from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const productNameInputHandler = createRef();
const productPriceInputHandler = createRef();
const productDescriptionInputHandler = createRef();

function UpdateProduct(props) {
  const navigate = useNavigate();
  function updateInputFormHandler(event) {
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
    updateProduct(productInformation, props.productId);
    // console.log(productInformation);
    toast.success('Product Updated!');
    navigate("/user/products");
  }

  const product = getProduct(props.productId);
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={updateInputFormHandler}>
        <center>
          <h1 className={classes.logo}> Update Product</h1>
        </center>
        <div className={classes.inputContainer}>
          <label className={classes.labelWidth} htmlFor="productName">
            Product Name
          </label>
          <input type="text" id="productName" ref={productNameInputHandler} defaultValue= {product.productName}/>
        </div>

        <div className={classes.inputContainer}>
          <label className={classes.labelWidth} htmlFor="productPrice">
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            ref={productPriceInputHandler}
            defaultValue = {product.productPrice}
          />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.labelWidth} htmlFor="productDescription">
            Product Description
          </label>
          <textarea
            id="productDescription"
            ref={productDescriptionInputHandler}
            className={classes.textarea}
            defaultValue= {product.productDescription}
          />
        </div>
        <button className={classes.updateButton}>Update</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
