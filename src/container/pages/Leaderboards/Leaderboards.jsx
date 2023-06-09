import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Threads from '../../fragments/Threads';
import { asyncGetAllLeaderboards } from '../../../states/leaderboards/action';

function Leaderboards() {
  const dispatch = useDispatch();
  const { leaderboards } = useSelector((state) => state);
  useEffect(() => {
    dispatch(asyncGetAllLeaderboards());
  }, [dispatch]);
  return (
    <Threads>
      <div className="min-h-screen p-4 mx-2 mt-5 mb-20 bg-slate-200 rounded-xl">
        <div className="mb-4 text-2xl font-bold text-center">Leaderboards</div>
        <div className="flex justify-between px-4 py-2 mb-4 text-white bg-slate-400 rounded-2xl ">
          <div className="text-lg font-semibold">Pengguna</div>
          <div className="text-lg font-semibold">Scors</div>
        </div>
        <hr className="w-11/12 mx-auto my-4 border-1 border-slate-400" />

        {leaderboards
          && leaderboards.map((leaderboard) => (
            <div key={leaderboard.user.id}>
              <div className="flex items-center justify-between px-5">
                <div className="flex items-center">
                  <div className="w-10 h-10 mr-5 ">
                    <img
                      src={leaderboard.user.avatar}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="font-semibold">{leaderboard.user.name}</div>
                </div>
                <div className="font-semibold">{leaderboard.score}</div>
              </div>
              <hr className="w-11/12 mx-auto my-4 border-1 border-slate-400" />
            </div>
          ))}
      </div>
    </Threads>
  );
}

export default Leaderboards;
