import React from "react";
import "./registration.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({
      email: state.email,
      password: state.password,
    }))
  };

  return (
    <div className="signUp-form">
      <div className="signUp-formWrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
