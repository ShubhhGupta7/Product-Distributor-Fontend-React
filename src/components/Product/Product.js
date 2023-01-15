import classes from "./Product.module.css";
import { isAdmin } from "../../auth";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../store";
import CartInput from "../Cart/CartInput";
import { toast } from "react-toastify";
import Card from "../UI/Card";

function Product(props) {
  const navigate = useNavigate();

  // Navigation Handler for Updating Product
  const updateProduct = () => {
    // console.log(props.productId);
    navigate(`/user/update-product/${props.productId}`);
  };

  const deleteProductHelper = () => {
    deleteProduct(props.productId);
    toast.success("Product Deleted!");
    props.setProductDeleted(props.productDeleted + 1);
  };

  return (
    <li className={`${classes.width}`}>
      <Card >
        <div className="card-body">
          <h3 className="card-title">{props.productName}</h3>
          <strong>
            <h5 className={`card-subtitle mb-2 ${classes.color}`}>
              Price: &nbsp;&#8377;{props.productPrice}
            </h5>
            <p className={`card-text ${classes.productDescription}`}>
              {props.productDescription}
            </p>
          </strong>

          {/* Update and Delete Buttons */}
          {isAdmin() && (
            <div className={classes.actionContainer}>
              <button className="btn btn-outline-light btn-lg btn-block" onClick={updateProduct}>
                Update
              </button>
              <button
                className="btn btn-outline-light btn-lg"
                onClick={deleteProductHelper}
              >
                Delete
              </button>
            </div>
          )}

          {/* Add to Cart Component */}
          {!isAdmin() && <CartInput productId={props.productId} />}
        </div>
      </Card>
    </li>
  );
}

export default Product;
