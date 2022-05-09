import { Field, Form, Formik } from "formik";
import React, { ChangeEvent, FC } from "react";
import FormTextArea from "../../../shared/FormTextArea/FormTextArea";
import { textAreasValidation } from "../../../utils/validation/validators";

type PropsType = {
  onClickSendMessage: (values: FormValuesType) => void;
  onChangeEditMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export type FormValuesType = {
  message: string;
};

const AddMessageForm: FC<PropsType> = (props) => {
  const { onClickSendMessage } = props;
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
            name="message"
            placeholder="enter ur message"
            component={FormTextArea}
            validate={textAreasValidation(30)}
          />
          <button type="submit">+</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMessageForm;
