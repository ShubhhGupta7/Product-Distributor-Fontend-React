import { createRef } from "react";
import classes from "./Login.module.css";

const emailInputHandler = createRef();
const passwordInputHandler = createRef();

function Login() {
  function loginInputFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputHandler.current.value;
    const enteredPassword = passwordInputHandler.current.value;

    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(credentials);
  }

  return (
    <form onSubmit={loginInputFormHandler}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={emailInputHandler} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" ref={passwordInputHandler} />

      <button>Login</button>
    </form>
  );
}

export default Login;
