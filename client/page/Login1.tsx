import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrappers from "../assets/wrappers/Login.Wrappers";
import FormRow from "../components/FormRow";
import { changeInitialState } from "../features/register/registerSlice";
import { RootState } from "../store";

const Login1 = () => {
  const { userName, email, password, confirmPassword, isMember } = useSelector(
    (state: RootState) => state.registerUser
  );
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInitialState());
    // setData({ ...data, [e.target.name]: e.target.value });
  };
  if (password !== confirmPassword) {
    console.log("password doest match");
  }
  if (password === confirmPassword) {
    console.log("password match");
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await axios.post("http://localhost:4000/api/v1/auth/register", data);
  };

  const toggleMember = () => {};
  return (
    <Wrappers>
      <form action="" className="form" onSubmit={handleSubmit}>
        {!isMember && (
          <FormRow
            name="userName"
            type="text"
            handleChange={handleChange}
            label="userName"
            labelText="User Name"
            value={userName}
          ></FormRow>
        )}
        <FormRow
          name="email"
          type="email"
          handleChange={handleChange}
          label="email"
          labelText="Email Address"
          value={email}
        ></FormRow>
        <FormRow
          name="password"
          type="text"
          handleChange={handleChange}
          label="password"
          labelText="Password"
          value={password}
        ></FormRow>
        {!isMember && (
          <FormRow
            name="confirmPassword"
            type="text"
            handleChange={handleChange}
            label="confirmPassword"
            labelText="Confirm Password"
            value={confirmPassword}
          ></FormRow>
        )}
        <button className="btn login-btn" type="submit">
          {isMember ? "Login" : "Sign-up"}
        </button>
        <div className="bottom">
          <span className="sign-up" onClick={toggleMember}>
            {isMember ? "Sign up" : "Login"}
          </span>
          <span className="forget-password">forget password</span>
        </div>
      </form>
    </Wrappers>
  );
};

export default Login1;
