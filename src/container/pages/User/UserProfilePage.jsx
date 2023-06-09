import React, { useEffect } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import {
  asyncGetAuthUser,
  asyncUnsetAuthUser,
} from '../../../states/authUsers/action';
import Threads from '../../fragments/Threads';

function UserProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state);
  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/login');
  };
  useEffect(() => {
    dispatch(asyncGetAuthUser());
  }, [dispatch]);

  return (
    <Threads>
      <div className="flex flex-col justify-between h-screen p-4 mx-2 mt-5 mb-20 bg-slate-200 rounded-xl">
        {authUser && (
          <div className="flex flex-col gap-5">
            <div className="mb-4 text-2xl font-bold text-center">Profile</div>

            <img
              src={authUser.avatar}
              alt=""
              className="w-1/4 mx-auto rounded-full"
            />
            <div className="flex justify-center gap-5 py-4 bg-slate-300 rounded-xl">
              <div className="">
                <div className="font-bold">Username :</div>
                <div className="font-bold">Email :</div>
              </div>
              <div>
                <div className="font-semibold">{authUser.email}</div>
                <div className="font-semibold">{authUser.name}</div>
              </div>
            </div>
            <Link
              to="/leaderboards"
              className="flex justify-center py-2 font-semibold border-2 bg-slate-50 border-slate-700 text-slate-800 rounded-xl"
            >
              <span className="flex items-center gap-3">
                See leaderboards
                <BsArrowRightCircleFill />
              </span>
            </Link>
          </div>
        )}

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <button type="button" className="py-2 font-semibold text-white rounded-full bg-slate-700">
              Logout
            </button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                Are you absolutely sure?
              </AlertDialog.Title>
              <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                Anda yakin ingin keluar?
              </AlertDialog.Description>
              <div className="flex justify-end gap-[25px]">
                <AlertDialog.Cancel asChild>
                  <button type="button" className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    Cancel
                  </button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <button type="button" onClick={onLogout} className="text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    Yes, Logout now!
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>

      </div>
    </Threads>
  );
}

export default UserProfilePage;
