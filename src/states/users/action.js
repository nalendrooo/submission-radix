import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

const asyncGetAllUsers = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers();
    dispatch(receiveUsersActionCreator(users));
  } catch (error) {
    alert(error.message);
  }
};

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.Register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType, receiveUsersActionCreator, asyncRegisterUser, asyncGetAllUsers,
};
