import { addToCart } from "../store";
import classes from "./CartInput.module.css";
import { toast } from "react-toastify";

function CartInput(props) {
  // For Taking input for quantity
  let quantity = 0;
  const quantityInputHandler = (event) => {
    quantity = event.target.value;
  };

  function addItemToCartHandler(event) {
    event.preventDefault();
    const enteredQuantity = parseInt(quantity);
    // console.log(props.productId, enteredQuantity);

    if (enteredQuantity <= 0) {
      toast.error("Please Enter a Valid Quantity!");
      return;
    }

    addToCart(props.productId, enteredQuantity);
    toast.success("Product Added to Cart!");
  }

  return (
    <>
      <form onSubmit={addItemToCartHandler}>
        {/* Input Quantity */}
        <input
          id="quantity"
          type="number"
          className={classes.addQuantity}
          onChange={quantityInputHandler}
          required
          placeholder="No. of Boxes"
        />
        <button className={classes.addButton}>Add</button>
      </form>
    </>
  );
}

export default CartInput;
