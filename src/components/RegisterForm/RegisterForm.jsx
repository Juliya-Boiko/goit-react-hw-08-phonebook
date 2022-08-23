import { Form, Formik } from "formik";

export const RegisterForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {props => (
        <Form>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="name" />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email" />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password" />
          <button type="submit">REGISTER</button>
        </Form>
      )}
    </Formik>
  );
};