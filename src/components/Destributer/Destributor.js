import classes from "./Destributor.module.css";

function Product(props) {
  return (
    <li className={`card ${classes.width} ${classes.card}`}>
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <div className={classes.contactContainer}>
          <strong>
            <h6 className="card-subtitle mb-2 text-primary">
              Email: &nbsp;{props.email}
            </h6>
            <h6 className="card-subtitle mb-2 text-primary">
              Contact No:&nbsp;{props.contact}
            </h6>
          </strong>
        </div>
      </div>
    </li>
  );
}

export default Product;
