import * as yup from 'yup';

export const formShema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().length(7).required(),
});