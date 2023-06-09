import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  type, placeholder, name, onChange, value, id,
}, ref) => (
  <input
    ref={ref}
    className="w-2/3 px-8 py-3 mx-auto my-1 text-sm border-2 rounded-full md:w-full text-slate-700 shadow- focus:text-slate-700 focus:text-sm focus:outline-none border-slate-700 placeholder:text-sm placeholder:text-slate-400 placeholder:italic"
    type={type}
    placeholder={placeholder}
    name={name}
    autoComplete="off"
    onChange={onChange}
    value={value}
    id={id}
  />
));

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
