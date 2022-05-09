import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import FormTextArea from "../../../../shared/FormTextArea/FormTextArea";
import { textAreasValidation } from "../../../../utils/validation/validators";

type PropsType = {
  onAddPost: (values: ValuesType) => void;
};

export type ValuesType = {
  postMessage: string;
};

const AddPostForm: FC<PropsType> = (props) => {
  const { onAddPost } = props;
  return (
    <>
      <Formik
        initialValues={{
          postMessage: "",
        }}
        onSubmit={onAddPost}
      >
        <Form>
          <Field
            name="postMessage"
            component={FormTextArea}
            validate={textAreasValidation(15)}
          />
          <div>
            <button type="submit">add post</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddPostForm;
