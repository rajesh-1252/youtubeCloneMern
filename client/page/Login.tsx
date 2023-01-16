import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Wrappers from "../assets/wrappers/Login.Wrappers";
import FormRow from "../components/FormRow";

const Login = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isMember: true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  if (data.password !== data.confirmPassword) {
    console.log("password doest match");
  }
  if (data.password === data.confirmPassword) {
    console.log("password match");
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/api/v1/auth/register", data);
    console.log(data);
  };

  const toggleMember = () => {
    setData({ ...data, isMember: !data.isMember });
  };
  return (
    <Wrappers>
      <form action="" className="form" onSubmit={handleSubmit}>
        {!data.isMember && (
          <FormRow
            name="userName"
            type="text"
            handleChange={handleChange}
            label="userName"
            labelText="User Name"
            value={data.userName}
          ></FormRow>
        )}
        <FormRow
          name="email"
          type="email"
          handleChange={handleChange}
          label="email"
          labelText="Email Address"
          value={data.email}
        ></FormRow>
        <FormRow
          name="password"
          type="text"
          handleChange={handleChange}
          label="password"
          labelText="Password"
          value={data.password}
        ></FormRow>
        {!data.isMember && (
          <FormRow
            name="confirmPassword"
            type="text"
            handleChange={handleChange}
            label="confirmPassword"
            labelText="Confirm Password"
            value={data.confirmPassword}
          ></FormRow>
        )}
        <button className="btn login-btn" type="submit">
          {data.isMember ? "Login" : "Sign-up"}
        </button>
        <div className="bottom">
          <span className="sign-up" onClick={toggleMember}>
            {data.isMember ? "Sign up" : "Login"}
          </span>
          <span className="forget-password">forget password</span>
        </div>
      </form>
    </Wrappers>
  );
};

export default Login;
