import { ActionType } from './action';

const detailThreadReducer = (detailThread = {}, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.detailThread;
    case ActionType.ADD_COMMENT_THREAD: {
      const { comment } = action.payload;
      const updatedComments = [comment, ...detailThread.comments];
      return {
        ...detailThread,
        comments: updatedComments,
      };
    }
    default:
      return detailThread;
  }
};

export default detailThreadReducer;
