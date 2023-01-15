import { createRef } from "react";
import classes from "./AddProduct.module.css";
import { addProduct } from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Using refs
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
    addProduct(productInformation);
    // console.log(productInformation);
    toast.success("Product Added Succcessfully!");
    navigate("/user/products");
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={addProductInputFormHandler}>
        <center>
          <h1 className={classes.logo}> Add Product</h1>
        </center>

        {/* Product Name Input */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            className={classes.input}
            type="text"
            id="productName"
            ref={productNameInputHandler}
            placeholder="Product Name"
          />
        </div>

        {/* Product Price Input */}
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
            placeholder="Product Price"
          />
        </div>

        {/* Product Description Input */}
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
            placeholder="Product Description"
          />
        </div>
        <center>
          <button className={`${classes.button}`}>Add Product</button>
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

export default AddProduct;
