export const addUserInputs = (values, errors) => [
  {
    type: 'text',
    value: values.name,
    name: 'name',
    placeholder: errors.name ? errors.name : 'Imię'
  },
  {
    type: 'text',
    value: values.lastName,
    name: 'lastName',
    placeholder: errors.name ? errors.name : 'Nazwisko'
  },
  {
    type: 'number',
    value: values.albumNumber,
    name: 'albumNumber',
    placeholder: errors.name ? errors.name : 'Numer albumu'
  },
  {
    type: 'text',
    value: values.login,
    name: 'login',
    placeholder: errors.name ? errors.name : 'Login'
  },
  {
    type: 'password',
    value: values.password,
    name: 'password',
    placeholder: errors.name ? errors.name : 'Hasło'
  },
  {
    type: 'text',
    value: values.course,
    name: 'course',
    placeholder: errors.name ? errors.name : 'Kierunek'
  }
];
