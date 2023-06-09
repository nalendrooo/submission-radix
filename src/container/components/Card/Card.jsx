import React from 'react';
import {
  BsHandThumbsDown,
  // BsHandThumbsDownFill,
  // BsHandThumbsUpFill,
  BsHandThumbsUp,
  BsChatLeftQuote,
} from 'react-icons/bs';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Card({ thread }) {
  const navigate = useNavigate();
  const {
    id,
    title,
    body,
    category,
    upVotesBy,
    downVotesBy,
    createdAt,
    name,
    totalComments,
  } = thread;

  const handleCardClick = () => {
    navigate(`/threads/detail/${id}`);
  };

  return (
    <div>
      <header
        key={id}
        className="p-5 mx-2 mb-3 shadow-md cursor-pointer bg-slate-100 rounded-2xl"
        onClick={handleCardClick}
      >
        <p className="text-xs italic text-right">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </p>
        <h1 className="text-lg font-bold text-slate-700">{title}</h1>
        <p
          className="py-3 text-base text-gray-600"
          dangerouslySetInnerHTML={{ __html: `${body.slice(0, 200)}...` }}
        />

        <p className="text-base text-white">
          <span className="px-2 py-1 text-sm font-semibold rounded-md bg-slate-400">
            #
            {category}
          </span>
        </p>
        <div className="flex justify-between">
          <div className="flex mt-4 cursor-pointer">
            <div className="flex mr-4">
              <span className="mr-2">
                <BsHandThumbsUp />
              </span>
              <span className="text-xs">{upVotesBy.length}</span>
            </div>
            <div className="flex mr-4">
              <span className="mr-2 ">
                <BsHandThumbsDown />
              </span>
              <span className="text-xs">{downVotesBy.length}</span>
            </div>
            <div className="flex">
              <span className="mr-2">
                <BsChatLeftQuote />
              </span>
              <span className="text-xs">{totalComments}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-right">Dibuat oleh:</span>
            <span className="text-sm font-semibold">{name}</span>
          </div>
        </div>
      </header>
    </div>
  );
}

Card.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default Card;
