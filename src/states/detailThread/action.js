import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  ADD_COMMENT_THREAD: 'ADD_COMMENT_THREAD',
};

const receiveDetailThreadCreator = (detailThread) => ({
  type: ActionType.RECEIVE_DETAIL_THREAD,
  payload: {
    detailThread,
  },
});

const asyncGetDetailThread = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const detailThread = await api.getDetailThread(id);

    dispatch(receiveDetailThreadCreator(detailThread));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const addCommentCreator = (comment) => ({
  type: ActionType.ADD_COMMENT_THREAD,
  payload: {
    comment,
  },
});

const asyncSendComment = (data, id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const comment = await api.sendComment(data, id);

    dispatch(addCommentCreator(comment));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

export {
  ActionType, receiveDetailThreadCreator, asyncGetDetailThread, asyncSendComment,
};
