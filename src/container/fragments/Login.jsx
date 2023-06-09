import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Form from '@radix-ui/react-form';
import ButtonLarge from '../components/Button/ButtonLarge';
import Input from '../components/Input/Input';

function Login({ login }) {
  const [state, setState] = useState({
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

    <Form.Root className="w-full md:w-1/2">
      <Form.Field className="grid mb-[10px]" name="email" required>
        <div className="flex items-baseline justify-between w-2/3 mx-auto md:w-full">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-800 w-full" htmlFor="email">
            Email
          </Form.Label>
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
      <Form.Field className="grid mb-[10px]" name="password" required>
        <div className="flex items-baseline justify-between w-2/3 mx-auto md:w-full">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-800 w-full" htmlFor="password">
            Password
          </Form.Label>
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
        <ButtonLarge variant="fill" onClick={() => login(state)}>
          Masuk
        </ButtonLarge>
      </Form.Submit>
    </Form.Root>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
