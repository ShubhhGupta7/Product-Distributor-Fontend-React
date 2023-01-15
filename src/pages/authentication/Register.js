import { createRef, useState, useEffect } from "react";
import classes from "./Register.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addDistributor } from "../../store";
import { isLoggedIn } from "../../auth";

// Creating ref Objects for data excess and change
const nameInputHandler = createRef();
const emailInputHandler = createRef();
const contactInputHandler = createRef();
const passwordInputHandler = createRef();
const confirmPasswordInputHandler = createRef();

function Register() {
  // Creating object of useNavigate for navigation
  const navigate = useNavigate();

  // Creating States
  const defaultState = {
    name: "",
    email: "",
    contact: "",
    password: "",
  };
  const [registeration, setRegisteration] = useState(defaultState);

  useEffect(() => {
    if (isLoggedIn()) navigate("/user/products");
  }, []);

  // Registeration Form Submission Handler
  function registerInputFormHandler(event) {
    // Preventing default form submission to server side
    event.preventDefault();

    // taking out data from form fields using refs
    const enteredName = nameInputHandler.current.value;
    const enteredEmail = emailInputHandler.current.value;
    const enteredContact = contactInputHandler.current.value;
    const enteredPassword = passwordInputHandler.current.value;
    const enteredConfirmPassword = confirmPasswordInputHandler.current.value;

    // Data Validation and Error Handling
    if (enteredName.length < 3) {
      toast.error("Length of Name should be greater than 3!");
      return;
    } else if (
      !enteredEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      toast.error("Invalid Email!");
      return;
    } else if (
      enteredContact.length !== 10 ||
      !enteredContact.match(/^[0-9]+$/)
    ) {
      toast.error("Please Enter a valid contact number");
      return;
    } else if (enteredPassword.length < 8) {
      toast.error("Password Should be atleast 8 characters long!");
      return;
    } else if (enteredPassword !== enteredConfirmPassword) {
      toast.error("Password Mismatch");
      return;
    }

    // Creating a state and changing Register Component State
    const registerationData = {
      name: enteredName,
      email: enteredEmail,
      contact: enteredContact,
      password: enteredPassword,
    };
    setRegisteration(registerationData);

    toast.success("Registered Successfully!");
    navigate("/login");

    // console.log(registerationData);
    // This is just for frontend will be removed as we include backend
    addDistributor(registerationData);

    // TODO:: This function will be used as we connect to backend
    // Using user-service for Server API Call

    // signup(registerationData)
    //   .then((res) => {
    //     console.log(res);
    //     console.log("SUCCESS");
    //     toast.success("Registered Successfully!");
    //     setRegisteration(defaultState);
    //     <Login />;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("ERROR");
    //     toast.error("Caught Error in Registeration!");
    //   });
  }

  // Handler for resetting the registeration form
  function resetFormHandler() {
    nameInputHandler.current.value = "";
    emailInputHandler.current.value = "";
    contactInputHandler.current.value = "";
    passwordInputHandler.current.value = "";
    confirmPasswordInputHandler.current.value = "";
    setRegisteration(defaultState);
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={registerInputFormHandler}>
        <center>
          <h1 className={classes.logo}> SignUp</h1>
        </center>

        {/* Name Input  */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className={classes.input}
            ref={nameInputHandler}
            placeholder="Name"
            required
          />
        </div>

        {/* Email Input  */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className={classes.input}
            ref={emailInputHandler}
            placeholder="Email"
            required
          />
        </div>

        {/* Contact Input  */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="contact"
          >
            Contact No.
          </label>
          <input
            type="text"
            id="contact"
            className={classes.input}
            ref={contactInputHandler}
            placeholder="Contact No."
            required
          />
        </div>

        {/* Password Input  */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={classes.input}
            ref={passwordInputHandler}
            placeholder="Password"
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div className={classes.inputContainer}>
          <label
            className={`${classes.labelWidth} ${classes.label}`}
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={classes.input}
            ref={confirmPasswordInputHandler}
            placeholder="Confirm Password"
            required
          />
        </div>

        {/* Buttons for Submission and Reset */}
        <div className={classes.actionContainer}>
          <button className={classes.button}>Register</button>
          <button
            className={classes.button}
            type="button"
            onClick={resetFormHandler}
          >
            Reset
          </button>
        </div>

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

export default Register;
