import React from "react";
import "./registration.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        username: state.username,
        password: state.password,
        email: state.email,
      })
    );
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state.email, state.password, state.username);

  return (
    <div className="signUp-form">
      <div className="signUp-formWrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Name"
              name="username"
              value={state.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={state.email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={state.password}
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
