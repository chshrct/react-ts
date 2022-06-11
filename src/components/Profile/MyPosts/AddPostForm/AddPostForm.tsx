import React, { FC } from 'react';

import { Field, Form, Formik } from 'formik';

import FormTextArea from '../../../../shared/FormTextArea/FormTextArea';
import { textAreasValidation } from '../../../../utils/validation/validators';

import { MESSAGE_SIZE } from 'constant';

type PropsType = {
  onAddPost: (values: ValuesType) => void;
};

export type ValuesType = {
  postMessage: string;
};

const AddPostForm: FC<PropsType> = props => {
  const { onAddPost } = props;
  return (
    <Formik
      initialValues={{
        postMessage: '',
      }}
      onSubmit={onAddPost}
    >
      <Form>
        <Field
          name="postMessage"
          component={FormTextArea}
          validate={textAreasValidation(MESSAGE_SIZE)}
        />
        <div>
          <button type="submit">add post</button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddPostForm;
