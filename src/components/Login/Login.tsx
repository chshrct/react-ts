import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth-reducer";
import { AppDispatch } from "../../redux/redux-store";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}

        //@ts-ignore
        onSubmit={(values) => dispatch(loginUser(values))}
      >
        <Form>
          <div>
            <label htmlFor="email">Login</label>
            <Field id="email" name="email" placeholder="enter email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="enter password"
              type="password"
            />
          </div>{" "}
          <div>
            <label htmlFor="rememberMe">Remember me</label>
            <Field id="rememberMe" name="rememberMe" type="checkbox" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
