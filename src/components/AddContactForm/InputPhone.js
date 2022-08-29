import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

export const InputPhone = ({ ...props }) => {
  const [field, _, helpers] = useField(props.name);

  return (
      <PhoneInput
        {...props}
        {...field}
        containerStyle={{
          color: 'black',
          marginBottom: "10px",}}
        inputStyle={{
          outline: "2px solid #D75C78",
          borderRadius: "5px"
        }}
        value={field.value}
        id="number"
        defaultCountry="ua"
        preferredCountries={["ua"]}
        masks={{ua: '(..) ...-..-..'}}
        onChange={(value) => {
          helpers.setValue(value);
        }}
      />
  );
};