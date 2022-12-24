import classes from "./Product.module.css";
import { isAdmin } from "../../auth";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../store";
import CartInput from "../CartInput";
import { toast } from "react-toastify";

function Product(props) {
  const navigate = useNavigate();

  const updateProduct = () => {
    console.log(props.productId);
    navigate(`/user/update-product/${props.productId}`);
  };

  const deleteProductHelper = () => {
    deleteProduct(props.productId);
    toast.success('Product Deleted!');
  };

  

  return (
    <li className={`card ${classes.width} ${classes.card}`}>
      <div className="card-body">
        <h3 className="card-title">{props.productName}</h3>
        <strong>
          <h5 className="card-subtitle mb-2 text-primary">
            Price: &nbsp;&#8377;{props.productPrice}
          </h5>
          <p className={`card-text text-muted ${classes.productDescription}`}>
            {props.productDescription}
          </p>
        </strong>

        {isAdmin() && (
          <div>
            <button className={classes.updateButton} onClick={updateProduct}>
              Update
            </button> 
            <button
              className={classes.deleteButton}
              onClick={deleteProductHelper}
            >
              Delete
            </button>
          </div>
        )}

        {!isAdmin() && <CartInput productId = {props.productId}/>}
      </div>
    </li>
  );
}

export default Product;
