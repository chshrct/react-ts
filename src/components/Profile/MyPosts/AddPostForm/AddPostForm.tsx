import { Field, Form, Formik } from "formik";
import React, { ChangeEvent, FC } from "react";

type PropsType = {
  newPostText: string;
  onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onAddPost: () => void;
};

const AddPostForm: FC<PropsType> = (props) => {
  const { newPostText, onPostChange, onAddPost } = props;
  return (
    <>
      <Formik initialValues={{}} onSubmit={onAddPost}>
        <Form>
          <Field as={"textarea"} onChange={onPostChange} value={newPostText} />
          <div>
            <button type="submit">add post</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddPostForm;
