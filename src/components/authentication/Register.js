import { createRef } from "react";
import classes from "./Register.module.css";

const nameInputHandler = createRef();
const emailInputHandler = createRef();
const contactInputHandler = createRef();
const passwordInputHandler = createRef();
const confirmPasswordInputHandler = createRef();

function Register() {
  function registerInputFormHandler(event) {
    event.preventDefault();
    const enteredName = nameInputHandler.current.value;
    const enteredEmail = emailInputHandler.current.value;
    const enteredContaact = contactInputHandler.current.value;
    const enteredPassword = passwordInputHandler.current.value;
    const enteredConfirmPassword = confirmPasswordInputHandler.current.value;

    const registerationData = {
      name: enteredName,
      email: enteredEmail,
      contact: enteredContaact,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    };
    console.log(registerationData);
  }

  return (
    <form onSubmit={registerInputFormHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" ref={nameInputHandler} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={emailInputHandler} />

      <label htmlFor="contact">Contact No.</label>
      <input type="number" id="contact" ref={contactInputHandler} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" ref={passwordInputHandler} />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        ref={confirmPasswordInputHandler}
      />

      <button>Register</button>
    </form>
  );
}

export default Register;
