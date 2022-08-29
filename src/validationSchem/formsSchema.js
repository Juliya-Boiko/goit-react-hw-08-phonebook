import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().length(7).required(),
});

export const registerSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email('must be a valid email').required(),
  password: yup.string().min(4).required(),
});

export const logSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});
