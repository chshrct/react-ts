import { Field, Form, Formik } from "formik";
import { login } from "../../../redux/auth-reducer";
import { useAppDispatch } from "../../../redux/redux-store";
import FormInput from "../../../shared/FormInput/FormInput";
import { textAreasValidation } from "../../../utils/validation/validators";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={(values, actions) => {
          dispatch(login(values, actions));
        }}
      >
        {({isSubmitting}) => (
          <Form>
            <div>
              <label htmlFor="email">Login</label>
              <Field
                name="email"
                placeholder="enter email"
                component={FormInput}
                validate={textAreasValidation(40)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                placeholder="enter password"
                type="password"
                component={FormInput}
                validate={textAreasValidation(20)}
              />
            </div>{" "}
            <div>
              <label htmlFor="rememberMe">Remember me</label>
              <Field name="rememberMe" type="checkbox" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>Login</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
