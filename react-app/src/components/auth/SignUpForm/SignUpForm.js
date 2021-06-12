import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import validator from 'validator'
import './SignUpForm.css'

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
  
    e.preventDefault();
    let errors = [];

    if (!username) errors.push("Enter name");
    if (!email) errors.push("Enter email");
    if (!validator.isEmail(email)) {
      errors.push("Please enter a valid email");
    }
    setValidationErrors(errors);

    if (validationErrors.length < 1 && password.length && password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
    else {
      return 
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form className="signupform" onSubmit={onSignUp}>
      <h1>Sign up for Full Court Press!</h1>
      {validationErrors.length > 0 && (
        <ul>
          {validationErrors.map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-fields">
        <div className="signup-field">
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="signup-field">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="signup-field">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="signup-field">
          <label>Repeat Password:</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
      </div>
      <button className="signup-submit"type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
