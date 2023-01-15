import classes from "./Distributor.module.css";
import Card from "../UI/Card";

function Distributor(props) {
  return (
    <li className={classes.width}>
      <Card>
        <div className="card-body">
          <center>
            <h3 className="card-title">{props.name}</h3>{" "}
          </center>
          <div className={classes.contactContainer}>
            <h5>
              <div>Email</div>
              <div className={classes.label}>{props.email}</div>
            </h5>
            <h5>
              <div>Contact</div>
              <div className={classes.label}>{props.contact}</div>
            </h5>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default Distributor;
