import { FC } from 'react';

import { Field, Form, Formik } from 'formik';

import { MESSAGE_SIZE } from 'shared/constant';
import FormTextArea from 'shared/ui/FormTextArea/FormTextArea';
import { textAreasValidation } from 'shared/utils/validation/validators';

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
