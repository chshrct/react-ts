import { Field, Form, Formik } from "formik";
import React, { ChangeEvent, FC } from "react";

type PropsType = {
  onClickSendMessage: () => void;
  onChangeEditMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  newMessage: string;
};

const AddMessageForm: FC<PropsType> = (props) => {
  const { newMessage, onChangeEditMessage, onClickSendMessage } = props;
  return (
    <div>
      <Formik
        initialValues={{
          message: "",
        }}
        onSubmit={onClickSendMessage}
      >
        <Form>
          <Field
            id="message"
            name="message"
            placeholder="enter ur message"
            as="textarea"
            value={newMessage}
            onChange={onChangeEditMessage}
          />
          <button type="submit">+</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMessageForm;
