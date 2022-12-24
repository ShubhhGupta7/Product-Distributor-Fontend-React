import classes from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doLogout, getCurrentUserDetail, isLoggedIn, isAdmin } from "../auth";
import { toast } from "react-toastify";

function NavBar() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);


  const logout = () => {
    doLogout(() => {
      toast.success("Logout Successfully");
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <a className="navbar-brand" href="#">
        <h3 className={classes.logo}> &anjeevni</h3>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/user/products">
              Products
            </Link>
          </li>

          {isAdmin() && (<>
            <li className="nav-item">
              <Link className="nav-link" to="/user/destributors">
                Destributors
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/user/add-product">
              Add Product
            </Link>
          </li></>
          )}

          {!isAdmin() && (
            <li className="nav-item">
              <Link className="nav-link" to="/user/Cart">
                MyCart
              </Link>
            </li>
          )}

          {!login && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Signup
                </Link>
              </li>
            </>
          )}

          {login && (
            <li className="nav-item">
              <Link className="nav-link" onClick={logout} to="/login">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
