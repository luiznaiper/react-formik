import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 5) {
    errors.name = 'Min Length 5 characters';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 5) {
    errors.lastName = 'Min Length 5 characters';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (values.email.length < 8) {
    errors.email = 'Min Length 8 characters';
  }
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{ name: '', lastName: '', email: '' }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <label>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
        <br />
        <label>Last Name</label>
        <Field type="text" name="lastName" />
        <br />
        <ErrorMessage name="lastName" />
        <label>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default App;
