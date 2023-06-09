import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_ALL_LEADERBOARDS: 'RECEIVE_ALL_LEADERBOARDS',
};

const receiveAllLeaderboardsCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_ALL_LEADERBOARDS,
  payload: {
    leaderboards,
  },
});

const asyncGetAllLeaderboards = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const leaderboards = await api.getAllLeaderboards();
    dispatch(receiveAllLeaderboardsCreator(leaderboards));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};
export { ActionType, receiveAllLeaderboardsCreator, asyncGetAllLeaderboards };
