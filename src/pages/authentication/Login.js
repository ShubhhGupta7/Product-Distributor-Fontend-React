import { createRef, useEffect } from "react";
import classes from "./Login.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { doLogin, isLoggedIn } from "../../auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Creating ref Objects for data excess and change
const emailInputHandler = createRef();
const passwordInputHandler = createRef();

function Login() {
  const navigate = useNavigate();

  // Creating Default State
  const defaultState = {
    username: "",
    password: "",
  };
  const [loginCredentials, setCredentials] = useState(defaultState);

  useEffect(() => {
    if (isLoggedIn()) navigate("/user/products");
  }, []);

  // Handler for  login form
  function loginInputFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputHandler.current.value;
    const enteredPassword = passwordInputHandler.current.value;

    // Email Validation
    if (!enteredEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      toast.error("Invalid Email!");
      return;
    }

    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
    };
    // console.log(credentials);

    // This code will be removed in integration
    doLogin(credentials, () => {
      // console.log("Login Detail is stored in local storage");
      toast.success("Login Successful!");
      navigate("/user/products");
    });

    // Using user-service for server API Call
    // This will be used with integration with backend
    // login(credentials)
    //   .then((data) => {
    //     console.log("Login Success");
    //     console.log(data);

    //     // saving data to local storage
    //     doLogin(data, ()=> {
    //       console.log('Login Detail is stored in local storage');
    //       navigate('/user/products');
    //     })

    //     toast.success("Login Successful!");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.status == 400 || error.status == 404) {
    //       toast.error(error.response.message);
    //     } else {
    //       toast.error("Internal Server Error!");
    //     }
    //   });
  }

  // Handler for resetting the registeration form
  function resetFormHandler() {
    emailInputHandler.current.value = "";
    passwordInputHandler.current.value = "";
    setCredentials(defaultState);
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={loginInputFormHandler}>
        <center>
          <h1 className={classes.logo}> SignIn</h1>
        </center>

        {/* Input Email */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            className={classes.input}
            id="email"
            ref={emailInputHandler}
            required
            placeholder="Email"
          />
        </div>

        {/* Input Password */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className={classes.input}
            id="password"
            ref={passwordInputHandler}
            required
            placeholder="Password"
          />
        </div>

        {/* Buttons for Submission and Reset */}
        <div className={classes.actionContainer}>
          <button className={`${classes.button}`}>Login</button>
          <button
            className={`${classes.button}`}
            type="button"
            onClick={resetFormHandler}
          >
            Reset
          </button>
        </div>

        {/* To Register */}
        <center>
          <div className={classes.registerPage}>
            <h6>
              Want to Register as Distributor?
              <Link to="/register"> Register</Link>
            </h6>
          </div>
        </center>

        <button
          type="button"
          className={classes.cancel}
          onClick={() => {
            navigate("/");
          }}
        >
          X
        </button>
      </form>
    </div>
  );
}

export default Login;
