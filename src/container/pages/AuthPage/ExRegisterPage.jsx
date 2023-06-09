import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Register from '../../fragments/Register';
// import { asyncRegisterUser } from '../../states/users/action';
import { asyncRegisterUser } from '../../../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto bg-slate-200 md:w-1/2">
      <div className="mb-5 text-3xl font-bold ">Daftar Threader</div>
      <Register register={onRegister} />
      <div className="text-sm font-semibold">Sudah punya akun?</div>
      <Link
        to="/login"
        className="w-2/3 py-3 mx-auto mt-5 text-base font-semibold text-center bg-white border-2 rounded-full md:w-1/2 text-slate-800 focus:text-sm border-slate-800"
      >
        Masuk
      </Link>
    </div>
  );
}

export default RegisterPage;
