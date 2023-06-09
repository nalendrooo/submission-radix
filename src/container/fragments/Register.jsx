import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import Input from '../components/Input/Input';
import ButtonLarge from '../components/Button/ButtonLarge';

function Register({ register }) {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form.Root className="w-full md:w-1/2 ">
      <Form.Field className="grid mb-[10px]" name="name">
        <div className="flex items-baseline justify-between w-2/3 mx-auto md:w-full ">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-800  w-full" htmlFor="username">Username</Form.Label>
          <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
            Please enter your username
          </Form.Message>
          <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
            Please provide a valid username
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            type="text"
            placeholder="Please enter your name"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between w-2/3 mx-auto md:w-full ">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-800  w-full" htmlFor="email">Email</Form.Label>
          <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            type="text"
            placeholder="Please enter your email address"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between w-2/3 mx-auto md:w-full ">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-800  w-full" htmlFor="password">Password</Form.Label>
          <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
            Please enter your password
          </Form.Message>
          <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
            Please provide a valid password
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            type="password"
            placeholder="Please enter your password"
            name="password"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <ButtonLarge variant="fill" onClick={() => register(state)}>Daftar</ButtonLarge>
      </Form.Submit>
    </Form.Root>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
