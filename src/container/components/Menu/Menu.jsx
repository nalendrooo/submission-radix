import React from 'react';
import { BsFillSendPlusFill, BsChatText, BsPersonCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state);
  const onLinkNewThread = () => {
    if (authUser) {
      navigate('/threads/new');
    } else {
      alert('Please Login first !');
    }
  };
  const onLinkProfile = () => {
    if (authUser) {
      navigate('/profile');
    } else navigate('/login');
  };
  return (
    <div className="drop-shadow-[0_0_5px_rgba(0,0,0,0.5)] bg-slate-800 py-3 rounded-t-xl w-full md:w-1/2 text-white fixed bottom-0">
      <div className="relative ">
        <button
          className="absolute p-4 text-white -translate-x-1/2 rounded-full cursor-pointer -top-8 left-1/2 bg-slate-500"
          onClick={onLinkNewThread}
          type="button"
        >
          <BsFillSendPlusFill />
        </button>
        <ul className="flex justify-evenly">
          <li>
            <Link to="/">
              <BsChatText size={30} className="cursor-pointer" />
            </Link>
          </li>
          <li />
          <li>
            <button onClick={onLinkProfile} type="button">
              <BsPersonCircle size={30} className="cursor-pointer" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
