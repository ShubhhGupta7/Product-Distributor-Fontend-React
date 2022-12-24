import { getCartItems, grandTotalAmount } from "../store";
import NavBar from "./NavBar";
import classes from "./Cart.module.css";

function Cart() {
  const cartItems = getCartItems();
  const grandTotal = grandTotalAmount();
  return (
    <>
      <NavBar />
      <div className={classes.tableContainer}>
        <table className={classes.cartItemContainer}>
          <tr>
            <th className={classes.productName}>
              <div>Product</div>
            </th>
            <th>
              <div>Price</div>
            </th>
            <th>
              <div>Quantity</div>
            </th>
            <th>
              <div>Total</div>
            </th>
          </tr>
          {cartItems.map((cartItem) => {
            return (
              <tr key={cartItem.productId} className={classes.cartItem}>
                <td className={classes.productName}>
                  <div>{cartItem.productName}</div>
                </td>
                <td>
                  <div>{cartItem.quantity}</div>
                </td>
                <td>
                  <div> {cartItem.productPrice}</div>
                </td>
                <td>
                  <div> {cartItem.total}</div>
                </td>
              </tr>
            );
          })}

          <tr>
            <th className={classes.productName}>
              <div></div>
            </th>
            <th>
              <div></div>
            </th>
            <th>
              <div>GrandTotal</div>
            </th>
            <th>
              <div>{grandTotal}</div>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Cart;
