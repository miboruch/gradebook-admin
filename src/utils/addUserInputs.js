export const addUserInputs = (values, errors) => [
  {
    type: 'text',
    value: values.name,
    name: 'name',
    error: errors.name ? errors.name : 'Imię',
    placeholder: 'Imię'
  },
  {
    type: 'text',
    value: values.lastName,
    name: 'lastName',
    error: errors.lastName ? errors.lastName : 'Nazwisko',
    placeholder: 'Nazwisko'
  },
  {
    type: 'text',
    value: values.albumNo,
    name: 'albumNo',
    error: errors.albumNo ? errors.albumNo : 'Numer albumu',
    placeholder: 'Numer albumu'
  },
  {
    type: 'text',
    value: values.login,
    name: 'login',
    error: errors.login ? errors.login : 'Login',
    placeholder: 'Login'
  },
  {
    type: 'password',
    value: values.password,
    name: 'password',
    error: errors.password ? errors.password : 'Hasło',
    placeholder: 'Hasło'
  }
];
