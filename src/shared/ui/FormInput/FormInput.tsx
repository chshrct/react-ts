/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';

const FormInput: FC = ({ field, form: { touched, errors }, ...props }: any) => {
  return (
    <div>
      <input
        style={
          touched[field.name] &&
          errors[field.name] && { border: '2px solid red', outline: 'none' }
        }
        {...field}
        {...props}
      />
      <div>
        <span style={touched[field.name] && errors[field.name] && { color: ' red' }}>
          {touched[field.name] && errors[field.name]}
        </span>
      </div>
    </div>
  );
};

export default FormInput;
