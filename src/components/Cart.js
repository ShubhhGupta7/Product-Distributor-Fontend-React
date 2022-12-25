import { getCartItems, grandTotalAmount, getTotalItems } from "../store";
import NavBar from "./NavBar";
import classes from "./Cart.module.css";

function Cart() {
  // Using local Store File for geting data
  const cartItems = getCartItems();
  const grandTotal = grandTotalAmount();
  const totalItems = getTotalItems();
  return (
    <>
      <NavBar />
      <div className={classes.tableContainer}>
        {/* Product Table */}
        <table className={classes.cartItemContainer}>
          {/* Table Header */}
          <tr>
            <th className={classes.productName}>
              <div>Product</div>
            </th>
            <th>
              <div>Quantity</div>
            </th>
            <th>
              <div>Price</div>
            </th>
            <th>
              <div>Total</div>
            </th>
          </tr>

          {/* Products */}
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

          {/* Table Footer for Grand Total */}
          <tr>
            <th className={classes.productName}>
              <div>TotalItems</div>
            </th>
            <th>
              <div>{totalItems}</div>
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
