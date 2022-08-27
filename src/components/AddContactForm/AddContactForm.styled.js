import styled from "styled-components";
import { Form, Field } from "formik";

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 200px;

  @media screen and (max-width: 640px) {
    margin: 0 0 30px 0;
  }
`;

export const AddInput = styled(Field)`
  display: block;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 8px;
  background-color: #F3F3F3;
  outline: none;
  border: 2px solid #D75C78;
  box-shadow: inset 0px 0px 20px -1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;
