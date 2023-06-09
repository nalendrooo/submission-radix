import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const asyncSetAuthUser = ({ email, password }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const token = await api.Login({ email, password });
    api.putAccessToken(token);
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncGetAuthUser = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};
const unsetAuthUserActionCreator = () => ({
  type: ActionType.UNSET_AUTH_USER,
  payload: {
    authUser: null,
  },
});

const asyncUnsetAuthUser = () => (dispatch) => {
  dispatch(unsetAuthUserActionCreator());
  api.deleteAccessToken();
};

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncGetAuthUser,
  asyncUnsetAuthUser,
};
