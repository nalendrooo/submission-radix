import React from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import Menu from '../components/Menu/Menu';

function Threads({ children }) {
  return (
    <div>
      <div className="mx-auto mb-16 md:w-1/2">
        <div className="sticky top-0 bg-slate-800 w-100 rounded-b-xl">
          <LoadingBar />
          <div className="py-4 font-bold text-center text-white">Threader</div>
        </div>

        {children}
        <Menu />
      </div>
    </div>
  );
}

Threads.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Threads;
