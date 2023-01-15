import classes from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  doLogout,
  getCurrentUserDetail,
  isLoggedIn,
  isAdmin,
} from "../../auth";
import { toast } from "react-toastify";

function NavBar() {
  // For Navigation
  const navigate = useNavigate();

  // States for Login and user
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState({});

  // Whenever Login state changes navbar will be rerendered
  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  // Handler for logging out
  const logout = () => {
    doLogout(() => {
      toast.success("Logout Successfully");
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark justify-content-between`}
    >
      <a className="navbar-brand" href="#">
        <h3 className={classes.logo}> Sanjeevni</h3>
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

      {/* Products will be showed to all the users */}
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/products">
              Products
            </NavLink>
          </li>

          {/* Only Admin can see Distributor List and CRUD Functionality of Products */}
          {isAdmin() && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/distributors">
                  Distributors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/add-product">
                  Add Product
                </NavLink>
              </li>
            </>
          )}

          {/* Only Distributor can see the Cart for adding Items */}
          {!isAdmin() && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/Cart">
                MyCart
              </NavLink>
            </li>
          )}
        </ul>

        {/* Login, Signup and Logout according to user state */}
        <ul className="navbar-nav" style={{ marginRight: "5rem" }}>
          {login && (
            <li className="nav-item">
              <NavLink
                className=" btn btn-outline-light"
                onClick={logout}
                to="/login"
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
