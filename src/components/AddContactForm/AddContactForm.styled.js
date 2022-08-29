import styled from "styled-components";
import { Form } from "formik";
import PhoneInput from "react-phone-input-2";

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 200px;

  @media screen and (max-width: 640px) {
    margin: 0 0 30px 0;
  }
`;

export const PhoneField = styled(PhoneInput)`
  width: 100%;
  color: black;
`;