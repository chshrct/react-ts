import { FC } from 'react';

import { Field, Form, Formik } from 'formik';

import FormTextArea from '../../../shared/FormTextArea/FormTextArea';
import { textAreasValidation } from '../../../utils/validation/validators';

import { MESSAGE_SIZE } from 'constant';

type PropsType = {
  onClickSendMessage: (values: FormValuesType) => void;
};

export type FormValuesType = {
  message: string;
};

const AddMessageForm: FC<PropsType> = props => {
  const { onClickSendMessage } = props;
  return (
    <div>
      <Formik
        initialValues={{
          message: '',
        }}
        onSubmit={onClickSendMessage}
      >
        <Form>
          <Field
            name="message"
            placeholder="enter ur message"
            component={FormTextArea}
            validate={textAreasValidation(MESSAGE_SIZE)}
          />
          <button type="submit">+</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMessageForm;
