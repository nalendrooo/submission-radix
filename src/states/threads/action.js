import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_ALL_THREADS: 'RECEIVE_ALL_THREADS',
  ADD_NEW_THREADS: 'ADD_NEW_THREADS',
};

const receiveAllThreadsCreator = (threads) => ({
  type: ActionType.RECEIVE_ALL_THREADS,
  payload: {
    threads,
  },
});

const addThreadsCreator = (newThreads) => ({
  type: ActionType.ADD_NEW_THREADS,
  payload: {
    newThreads,
  },
});

const asyncGetAllThreads = () => async (dispatch, getState) => {
  dispatch(showLoading());
  try {
    const threads = await api.getAllThreads();
    const { users } = getState();
    const threadsWithUsername = threads.map((thread) => {
      const { ownerId } = thread;
      const owner = users.find((user) => user.id === ownerId);
      const username = owner ? owner.name : '';

      return { ...thread, name: username };
    });

    dispatch(receiveAllThreadsCreator(threadsWithUsername));
  } catch (error) {
    alert(error.message);
    dispatch(receiveAllThreadsCreator(null));
  }
  dispatch(hideLoading());
};

const asyncSendNewThreads = (threads) => async (dispatch, getState) => {
  dispatch(showLoading());
  try {
    const newThreads = await api.sendNewThreadomment(threads);
    const { users } = getState();
    const owner = users.find((user) => user.id === newThreads.ownerId);
    const username = owner ? owner.name : '';
    const threadsWithUsername = { ...newThreads, name: username };

    dispatch(addThreadsCreator(threadsWithUsername));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};
export {
  ActionType,
  receiveAllThreadsCreator,
  asyncGetAllThreads,
  addThreadsCreator,
  asyncSendNewThreads,
};
