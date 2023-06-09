import {
  BsHandThumbsDown,
  // BsHandThumbsDownFill,
  // BsHandThumbsUpFill,
  BsHandThumbsUp,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import CardComment from './CardComment';
import { asyncSendComment } from '../../../states/detailThread/action';

function CardDetails({ detailThread }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: '',
  });
  const {
    id,
    category,
    createdAt,
    title,
    body,
    owner,
    comments,
    downVotesBy,
    upVotesBy,
  } = detailThread;
  const { authUser } = useSelector((states) => states);
  const navigate = useNavigate();

  const handleChangeText = (e) => {
    setState({ content: e.target.value });
  };

  const onComment = () => {
    dispatch(asyncSendComment(state, id));
    setState({ content: '' });
  };
  const onLogin = () => {
    navigate('/login');
  };

  return (
    <div className="p-4 mx-2 mt-5 mb-20 bg-slate-200 rounded-xl">
      <div className="flex items-center justify-between">
        {owner && (
          <div className="flex items-center">
            <div className="w-8 h-8 mr-3 rounded-full ">
              <img src={owner.avatar} alt="" className="rounded-full" />
            </div>

            <span className="text-base font-semibold">{owner.name}</span>
          </div>
        )}

        <span className="text-xs italic text-right">
          {createdAt
          && formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>
      <hr className="mx-auto my-4 border-1 border-slate-400" />

      <div className="my-2 text-2xl font-bold">{title}</div>
      <p className="text-base" dangerouslySetInnerHTML={{ __html: body }} />

      <div className="flex items-center justify-between my-4">
        <div className="flex cursor-pointer">
          <div className="flex mr-4">
            <span className="mr-2">
              <BsHandThumbsUp />
            </span>
            {upVotesBy && <span className="text-xs">{upVotesBy.length}</span>}
          </div>
          <div className="flex">
            <span className="mr-2">
              <BsHandThumbsDown />
            </span>
            {downVotesBy && (
              <span className="text-xs">{downVotesBy.length}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="px-2 py-1 text-sm font-semibold text-white rounded-md bg-slate-400">
            #
            {category}
          </span>
        </div>
      </div>
      <hr className="mb-4 bg-slate-800 rounded-xl" />
      <div className="mb-4">
        <div className="mb-2 text-lg font-semibold">Beri komentar :</div>
        {authUser ? (
          <div className="flex gap-5">
            <input
              name=""
              id=""
              placeholder="Berikan komentar anda..."
              className="w-full px-5 py-2 text-sm rounded-lg outline outline-1 outline-slate-200 focus:text-sm placeholder:text-xs placeholder:italic"
              onChange={handleChangeText}
              value={state.content}
            />
            <button
              onClick={onComment}
              className="px-5 py-2 text-sm duration-200 border-2 border-slate-600 rounded-xl text-slate-600 hover:bg-slate-600 hover:text-white"
              type="button"
            >
              Kirim
            </button>
          </div>
        ) : (
          <p className="text-sm">
            Anda harus
            {' '}
            <button
              type="button"
              onClick={onLogin}
              className="italic text-blue-600 underline cursor-pointer"
            >
              login
            </button>
            {' '}
            dulu
          </p>
        )}
      </div>
      {comments && (
        <div className="">
          <p className="mb-2 text-lg font-semibold">
            Komentar(
            {
            comments.length
            }
            )
          </p>
          {comments.map((comment) => (
            <CardComment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
CardDetails.propTypes = {
  detailThread: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default CardDetails;
