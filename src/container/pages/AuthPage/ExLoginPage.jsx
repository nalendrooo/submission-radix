import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from '../../fragments/Login';
import { asyncSetAuthUser } from '../../../states/authUsers/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogin = ({ email, password }) => {
    if (!email) {
      alert('"email" is not allowed to be empty');
    } else if (!password) {
      alert('"password" is not allowed to be empty');
    } else {
      dispatch(asyncSetAuthUser({ email, password }));
      navigate('/profile');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto bg-slate-200 md:w-1/2">
      <div className="mb-5 text-3xl font-bold ">Masuk Thrseader</div>
      <Login login={onLogin} />
      <div className="text-sm font-semibold">Belum punya akun?</div>
      <Link
        to="/register"
        className="w-2/3 py-3 mx-auto mt-5 text-base font-semibold text-center bg-white border-2 rounded-full md:w-1/2 text-slate-800 focus:text-sm border-slate-800"
      >
        Daftar
      </Link>
    </div>
  );
}

export default LoginPage;
