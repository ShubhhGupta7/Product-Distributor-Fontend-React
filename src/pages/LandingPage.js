import { Link } from "react-router-dom";
import classes from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={classes.container}>
      <div className={classes.brandName}>&anjeevni
      </div>
      <div className={classes.linkContainer}>
        <div>
          <h3>
            Register as <Link to="/register" className={classes.link}>Distributor</Link>
          </h3>
        </div>
        <div>
          <h3>
            Login for <Link to="/login" className={classes.link}>Products</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
