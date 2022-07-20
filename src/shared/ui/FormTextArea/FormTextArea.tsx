/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';

const FormTextArea: FC = ({ field, form: { errors }, ...props }: any) => {
  return (
    <div>
      <textarea
        style={errors[field.name] && { border: '2px solid red', outline: 'none' }}
        {...field}
        {...props}
      />
      <div>
        <span style={errors[field.name] && { color: ' red' }}>{errors[field.name]}</span>
      </div>
    </div>
  );
};

export default FormTextArea;
