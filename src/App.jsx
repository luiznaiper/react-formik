import { Formik, Form, Field, ErrorMessage } from 'formik';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';
import TextInput from './components/TextInput';

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
  if (!values.accept || values.accept === 'false') {
    errors.accept = 'Accept or die';
  }
  if (!values.pokemon || values.pokemon === '') {
    errors.pokemon = 'Required';
  }
  if (!values.radio) {
    errors.radio = 'Required';
  }
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        pokemon: '',
        accepted: false,
        radio: '',
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <label>Name</label>
        <TextInput name="name" label="Your Name" />
        <br />
        <label>Last Name</label>
        <TextInput type="text" name="lastName" />
        <br />
        <label>Email</label>
        <TextInput type="email" name="email" />
        <Select label="Pokemon type" name="pokemon">
          <option value="">Select your pokemon</option>
          <option value="water">Water</option>
          <option value="fire">Fire</option>
          <option value="cheese">Cheese</option>
        </Select>
        <Radio name="radio" value="male" label="male" />
        <Radio name="radio" value="female" label="female" />
        <Radio name="radio" value="shemale" label="shemale" />
        <ErrorMessage name="radio" />
        <Checkbox name="accept">Accept terms</Checkbox>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default App;
