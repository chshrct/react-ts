import React from "react";

const FormInput = ({ field, form: { touched, errors }, ...props }: any) => {
  return (
    <div>
      <input
        style={
          touched[field.name] &&
          errors[field.name] && { border: "2px solid red", outline: "none" }
        }
        {...field}
        {...props}
      ></input>
      <div>
        <span
          style={touched[field.name] && errors[field.name] && { color: " red" }}
        >
          {touched[field.name] && errors[field.name]}
        </span>
      </div>
    </div>
  );
};

export default FormInput;
