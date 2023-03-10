import { createRef } from "react";
import classes from "./UpdateProduct.module.css";
import { updateProduct, getProduct } from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Refs
const productNameInputHandler = createRef();
const productPriceInputHandler = createRef();
const productDescriptionInputHandler = createRef();

function UpdateProduct(props) {
  // for navigation
  const navigate = useNavigate();

  function updateInputFormHandler(event) {
    event.preventDefault();

    const enteredProductName = productNameInputHandler.current.value;
    const enteredProductPrice = productPriceInputHandler.current.value;
    const enteredProductDesciption =
      productDescriptionInputHandler.current.value;

    let errorMessage = null;
    if (
      enteredProductName === "" ||
      enteredProductPrice === "" ||
      enteredProductDesciption === ""
    ) {
      errorMessage = "Form fields cannot be empty";
    } else if (enteredProductDesciption.length > 120) {
      errorMessage = "Description must be concise";
    }
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    const productInformation = {
      productName: enteredProductName,
      productPrice: enteredProductPrice,
      productDescription: enteredProductDesciption,
    };
    updateProduct(productInformation, props.productId);
    // console.log(productInformation);
    toast.success("Product Updated!");
    navigate("/user/products");
  }

  const product = getProduct(props.productId);
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={updateInputFormHandler}>
        <center>
          <h1 className={classes.logo}> Update Product</h1>
        </center>

        {/* Update Name Input */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className={classes.input}
            ref={productNameInputHandler}
            defaultValue={product.productName}
          />
        </div>

        {/* Update Product Price */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="productPrice"
          >
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            className={classes.input}
            ref={productPriceInputHandler}
            defaultValue={product.productPrice}
          />
        </div>

        {/* Update Product Description */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="productDescription"
          >
            Product Description
          </label>
          <textarea
            id="productDescription"
            ref={productDescriptionInputHandler}
            className={`${classes.textarea} ${classes.input}`}
            defaultValue={product.productDescription}
          />
        </div>

        <center>
          <button className={classes.button}>Update Product</button>
        </center>

        <button
          type="button"
          className={classes.cancel}
          onClick={() => {
            navigate("/");
          }}
        >
          X
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
