import styled from "styled-components";
import { Form, Field } from "formik";

export const LoginFormm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginInput = styled(Field)`
  display: block;
  margin: 0 0 10px 0;
  padding: 8px;
  background-color: #F3F3F3;
  outline: none;
  border: 2px solid #D75C78;
  box-shadow: inset 0px 0px 20px -1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;