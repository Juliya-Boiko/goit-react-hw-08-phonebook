import { Notify } from "notiflix";
import { Formik, ErrorMessage, useField } from "formik";
import { getItems, addNewContactAsync } from "redux/contactsSlice";
import { useRedux } from "hooks/useRedux";
import { contactSchema } from "validationSchem/formsSchema";
import { AddForm } from "./AddContactForm.styled";
import { ErrorText } from "components/common/ErrorText.styled";
import { Input } from "components/common/Input.styled.";
import { PrimaryButton } from "components/common/PrimaryButton.styled";
import { PhoneField } from "./AddContactForm.styled";
import 'react-phone-input-2/lib/style.css';


const CustomField = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
      <PhoneField
        {...props}
        {...field}
        value={field.value}
        id="number"
        defaultCountry="ua"
        preferredCountries={["ua"]}
        masks={{ua: '(...) ...-..-..'}}
        onChange={(value) => {
          helpers.setValue(value);
        }}
      />
  );
};


export const AddContactForm = () => { 
  const [dispatch, useSelector] = useRedux();
  const items = useSelector(getItems);

  const validateContact = data => {
    const normalizedValue = data.name.toLowerCase();
    const result = items.find(item =>
      item.name.toLowerCase() === normalizedValue
    );
    return result;
  };

  const normalizedContact = str => {
    const normalizedName = str
      .split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ');
    return normalizedName;
  };

  const submitHandler = (values, { resetForm }) => {
    const contact = {
      name: normalizedContact(values.name),
      number: values.number,
    }
    if (validateContact(contact)) {
      Notify.failure(`${contact.name} already exist`);
      return;
    } else {
      console.log(contact);
      dispatch(addNewContactAsync(contact));
    }
    resetForm();
  };

  
  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={submitHandler}
        validationSchema={contactSchema}
      >
        {props => (
          <AddForm>
            <Input
              type="text"
              name="name"
              placeholder="name"
              onChange={props.handleChange}
              value={props.values.name} />
            <ErrorMessage name="name" render={msg => <ErrorText>{msg}</ErrorText>} />
            {/* <Input
              type="tel"
              name="number"
              placeholder="number"
              onChange={props.handleChange}
              value={props.values.number} /> */}
            {/* <PhoneField
              type="tel"
              name="number"
              value={props.values.number}
              defaultCountry="ua"
              preferredCountries={["ua"]}
              onChange={(value) => props.handleChange(value)}
            /> */}
            <CustomField
              name="number"
              type="tel"
              placeholder="number"
            />
            <ErrorMessage name="number" render={msg => <ErrorText>{msg}</ErrorText>} />
            <PrimaryButton type="submit">ADD NEW CONTACT</PrimaryButton>
          </AddForm>
        )}
      </Formik>
    </>
  );
};


// const Example = () => (
//    <div>
//      <h1>My Form</h1>
//      <Formik
//        initialValues={{ name: '', number: '' }}
//        onSubmit={submitHandler);
//        }}
//      >
//        {props => (
//          <Form>
//            <CustomField name="number" type="text" />
//            <MyTextField name="lastName" type="text" label="Last Name" />
//            <MyTextField name="email" type="email" label="Email" />
//            <button type="submit">Submit</button>
//          </Form>
//        )}
//      </Formik>
//    </div>
//  );