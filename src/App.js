import React, { useState } from 'react';
import "./App.css";
import FormInput from './components/FormInput';

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type:"text",
      placeholder:"Username",
      label: "Username",
      errorMessage: "Username should be 3-16 charecters and shouldn't include any special charecter!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type:"email",
      placeholder:"Email",
      label: "Email",
      errorMessage: "It a valid email address!",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type:"date",
      placeholder:"birthday",
      label: "Birthday",
      // errorMessage: ""
    },
    {
      id: 4,
      name: "password",
      type:"password",
      placeholder:"password",
      label: "Password",
      errorMessage: "Password should be 8-20 charecters and include at least 1 letter, 1 number and 1 special charecter! ",
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type:"password",
      placeholder:"confirmPassword",
      label: "Confirm Password",
      errorMessage: "Password don't match!",
      pattern: values.password,
      required: true
    },
  ]

  const formSubmit = e => {
    e.preventDefault();
  }

  const onChange = e => {
    setValues({...values, [e.target.name]:e.target.value})
  }


  // console.log(values);
  return (
    <div className='app'>
      <form onSubmit={formSubmit}>
        <h1>Register</h1>

        {
          inputs.map(input => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))
        }
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;