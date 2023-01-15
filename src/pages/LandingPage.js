import { useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./LandingPage.module.css";
import { isLoggedIn } from "../auth";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) navigate("/user/products");
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.linkContainer}>
        <center>
          <div className={classes.links}>
            <h3>
              <Link className={classes.brand}>Sanjeevni</Link>
            </h3>
          </div>

          <div className={classes.links}>
            <h3>
              Register as <br />
              <Link to="/register" className={classes.link}>
                Distributor
              </Link>
            </h3>
          </div>
          <div className={classes.links}>
            <h3>
              Login for <br />
              <Link to="/login" className={classes.link}>
                Products
              </Link>
            </h3>
          </div>
        </center>
      </div>
      <div className={classes.image}>
        <img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1671442607_Dest_deal.png" />
      </div>
    </div>
  );
}

export default LandingPage;
