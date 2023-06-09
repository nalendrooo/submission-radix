import { ActionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ALL_THREADS:
      return action.payload.threads;
    case ActionType.ADD_NEW_THREADS: {
      const { thread } = action.payload;
      return [thread, ...threads];
    }
    default:
      return threads;
  }
};

export default threadsReducer;
