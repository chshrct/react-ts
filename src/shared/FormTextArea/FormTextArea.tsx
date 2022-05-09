import React from "react";

const FormTextArea = ({ field, form: { touched, errors }, ...props }: any) => {
  return (
    <div>
        <textarea style={errors[field.name] && { border: "2px solid red",outline:'none' }} {...field} {...props}></textarea>
      <div>
        <span style={errors[field.name] && { color: " red" }}>
          {errors[field.name]}
        </span>
      </div>
    </div>
  );
};

export default FormTextArea;
