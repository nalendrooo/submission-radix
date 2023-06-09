import React from 'react';
import PropTypes from 'prop-types';

function InputThread({
  type, placeholder, name, onChange, value,
}) {
  return (
    <input
      type={type}
      className="px-5 py-2 rounded-full focus:outline-none "
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

InputThread.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputThread;
