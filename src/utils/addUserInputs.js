export const addUserInputs = (values, errors) => [
  {
    type: 'text',
    value: values.name,
    name: 'name',
    error: errors.name ? errors.name : 'Imię',
    placeholder: 'Imię',
    disabled: false
  },
  {
    type: 'text',
    value: values.lastName,
    name: 'lastName',
    error: errors.lastName ? errors.lastName : 'Nazwisko',
    placeholder: 'Nazwisko',
    disabled: false
  },
  {
    type: 'text',
    value: values.albumNo,
    name: 'albumNo',
    error: errors.albumNo ? errors.albumNo : 'Numer albumu',
    placeholder: 'Numer albumu',
    disabled: values.admin
  },
  {
    type: 'text',
    value: values.login,
    name: 'login',
    error: errors.login ? errors.login : 'Login',
    placeholder: 'Login',
    disabled: false
  },
  {
    type: 'password',
    value: values.password,
    name: 'password',
    error: errors.password ? errors.password : 'Hasło',
    placeholder: 'Hasło',
    disabled: false
  }
];
