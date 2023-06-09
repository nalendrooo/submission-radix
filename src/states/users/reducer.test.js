import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = usersReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the talks when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USER',
      payload: {
        users: {
          id: 'threads-1',
          user: 'user-1',
        },
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
