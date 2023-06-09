import React from 'react';
import {
  BsHandThumbsDown,
  // BsHandThumbsDownFill,
  // BsHandThumbsUpFill,
  BsHandThumbsUp,
} from 'react-icons/bs';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

function CardComment({ comment }) {
  const {
    content, createdAt, downVotesBy, upVotesBy, owner,
  } = comment;
  return (
    <div className="p-4 mb-2 bg-white border-2 border-slate-400 rounded-xl">
      <div className="flex justify-between mb-1">
        <div className="flex items-center">
          <div className="mr-2 h-7 w-7">
            <img src={owner.avatar} alt="" className="rounded-full" />
          </div>
          <div className="font-semibold">{owner.name}</div>
        </div>
        <span className="text-xs italic">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>

      <div>
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="flex justify-between">
          <div className="flex mt-4 cursor-pointer">
            <div className="flex mr-4">
              <span className="mr-2">
                <BsHandThumbsUp />
              </span>
              <span className="text-xs">{upVotesBy.length}</span>
            </div>
            <div className="flex">
              <span className="mr-2">
                <BsHandThumbsDown />
              </span>
              <span className="text-xs">{downVotesBy.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
CardComment.propTypes = {
  comment: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default CardComment;
