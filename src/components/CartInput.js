import { addToCart } from "../store";
import { createRef } from "react";
import classes from './CartInput.module.css'
import { toast } from "react-toastify";

let quantity = 0;
const quantityInputHandler = (event) => {
    quantity = event.target.value;
}

function CartInput(props) {
  function addItemToCartHandler(event) {
    event.preventDefault();
    const enteredQuantity = parseInt(quantity)
    // console.log(props.productId, enteredQuantity);

    if(enteredQuantity === 0) {
      toast.error('Please Enter a Valid Quantity!');
      return;
    }

    addToCart(props.productId, enteredQuantity);
    toast.success('Product Added to Cart!');
  }

  return <>
  
          <form onSubmit={addItemToCartHandler}>
            <input
              id="quantity"
              type="number"
              className={classes.addQuantity}
              onChange = {quantityInputHandler}
              required
              placeholder="No. of Boxes"
            />
            <button className={classes.addButton}>Add</button>
          </form>
        </>;
}

export default CartInput;
