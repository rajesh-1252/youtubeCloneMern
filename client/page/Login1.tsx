import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrappers from "../assets/wrappers/Login.Wrappers";
import FormRow from "../components/FormRow";
import { selectErrors } from "../features/errors/errorsSlice";
import {
  getAllRegisterState,
  handleChange1,
  registerUser,
} from "../features/register/registerSlice";
import { AppDispatch } from "../store";

const Login1 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userName, email, password, confirmPassword, isMember } =
    useSelector(getAllRegisterState);
  const errors = useSelector(selectErrors);
  console.log({ errors });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const obj: { name: string; value: string } = {
      name: e.target.name,
      value: e.target.value,
    };
    dispatch(handleChange1(obj));
  };
  const toggleMember = () => {
    dispatch(handleChange1({ name: "isMember", value: !isMember }));
  };

  if (password !== confirmPassword) {
    console.log("password doest match");
  }
  if (password === confirmPassword) {
    console.log("password match");
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      registerUser({ userName, email, password, confirmPassword, isMember })
    );
  };

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
