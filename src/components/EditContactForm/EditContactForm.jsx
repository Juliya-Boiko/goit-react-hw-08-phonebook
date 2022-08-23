import { Form, Formik } from "formik";

export const EditContactForm = ({ item, onSubmit }) => {
  
  return (
    <Formik
      initialValues={{ name: item.name, number: item.number }}
      onSubmit={onSubmit}
    >
      {props => (
        <Form>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={props.handleChange}
            value={props.values.name} />
          <label htmlFor="password">Number</label>
          <input
            id="number"
            type="text"
            name="number"
            onChange={props.handleChange}
            value={props.values.number} />
          <button type="submit">EDIT CONTACT</button>
        </Form>
      )}
    </Formik>
  );
};