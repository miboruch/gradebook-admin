import * as Yup from 'yup';

export const CreateAccountSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Imię musi mieć conajmniej 2 znaki').required('Imię jest wymagane'),
  lastName: Yup.string()
    .min(2, 'Nazwisko musi mieć conajmniej 2 znaki')
    .required('Nazwisko jest wymagane'),
  albumNo: Yup.string()
    .min(5, 'Numer albumu musi mieć 5 znaków')
    .max(5, 'Numer albumu musi mieć 5 znaków')
    .nullable(),
  admin: Yup.boolean(),
  universityId: Yup.number().required(),
  login: Yup.string().min(2, 'Login musi mieć conajmniej 2 znaki').required('Login jest wymagany'),
  password: Yup.string()
    .min(6, 'Hasło musi mieć conajmniej 6 znaków')
    .required('Hasło jest wymagane'),
  courseId: Yup.number().required()
});
