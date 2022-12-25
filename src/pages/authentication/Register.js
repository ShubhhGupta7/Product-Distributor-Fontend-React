import { createRef, useState } from "react";
import classes from "./Register.module.css";
import { signup } from "../../Services/user-services";
import { toast } from "react-toastify";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { addDistributor } from "../../store";

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
    if (enteredContact.length !== 10) {
      toast.error("Please Enter a valid contact number");
      console.log("Please Enter a valid contact number");
      return;
    } else if (enteredPassword !== enteredConfirmPassword) {
      toast.error("Password Mismatch");
      console.log("Password Mismatch");
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
          <h1 className={classes.logo}> &anjeevni</h1>
        </center>

        {/* Name Input  */}
        <div className={classes.inputContainer}>
          <label className={classes.labelWidth} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameInputHandler}
            minLength="4"
            placeholder="Name"
            required
          />
        </div>

        {/* Email Input  */}
        <div className={classes.inputContainer}>
          <label className={classes.labelWidth} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailInputHandler}
            placeholder="Email"
            minLength={10}
            required
          />
        </div>

        {/* Contact Input  */}
        <div className={classes.inputContainer}>
          <label className={classes.labelWidth} htmlFor="contact">
            Contact No.
          </label>
          <input
            type="text"
            id="contact"
            ref={contactInputHandler}
            placeholder="Contact No."
            required
            minLength={10}
          />
        </div>

        {/* Password Input  */}
        <div className={classes.inputContainer}>
          <label className={classes.labelWidth} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            ref={passwordInputHandler}
            minLength="8"
            placeholder="Password"
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div className={classes.inputContainer}>
          <label className={classes.labelWidth} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            ref={confirmPasswordInputHandler}
            minLength="8"
            placeholder="Confirm Password"
            required
          />
        </div>

        {/* Buttons for Submission and Reset */}
        <div>
          <button>Register</button>
        </div>
        <div>
          <button
            className={classes.reset}
            type="button"
            onClick={resetFormHandler}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
