import React from 'react';
import PropTypes from 'prop-types';

function ButtonLarge({ onClick, children }) {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="w-2/3 py-3 my-5 text-base font-semibold text-white border-2 rounded-full md:w-full border-slate-800 bg-slate-800"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

ButtonLarge.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLarge;
