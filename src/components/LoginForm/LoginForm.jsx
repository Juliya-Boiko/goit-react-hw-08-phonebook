import { Form, Formik } from "formik";

export const LoginForm = ({ onSubmit }) => {
  
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {props => (
        <Form>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email"
            onChange={props.handleChange}
            value={props.values.email} />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            onChange={props.handleChange}
            value={props.values.password} />
          <button type="submit">LOG IN</button>
        </Form>
      )}
    </Formik>
  );
};