import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = leaderboardsReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the talks when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_ALL_LEADERBOARDS',
      payload: {
        leaderboards: [
          {
            id: 'user-1',
            user: 'user-1',
            scors: 24,
          },
          {
            id: 'user-2',
            user: 'user-3',
            scors: 24,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
