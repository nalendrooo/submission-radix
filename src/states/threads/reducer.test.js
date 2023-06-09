import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the talks when given by RECEIVE_ALL_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_ALL_THREADS',
      payload: {
        threads: [
          {
            id: 'threads-1',
            text: 'threads Test 1',
            user: 'user-1',
            replyTo: '',
            likes: [],
            createdAt: '2022-09-22T10:06:55.588Z',
          },
          {
            id: 'threads-2',
            text: 'threads Test 2',
            user: 'user-2',
            replyTo: '',
            likes: [],
            createdAt: '2022-09-22T10:06:55.588Z',
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the talks with the new talk when given by ADD_NEW_THREADS action', () => {
    // arrange
    const initialState = [
      {
        id: 'threads-1',
        text: 'threads Test 1',
        user: 'user-1',
        replyTo: '',
        likes: [],
        createdAt: '2022-09-22T10:06:55.588Z',
      },
    ];
    const action = {
      type: 'ADD_NEW_THREADS',
      payload: {
        thread: {
          id: 'threads-2',
          text: 'threads Test 2',
          user: 'user-2',
          replyTo: '',
          likes: [],
          createdAt: '2022-09-22T10:06:56.588Z',
        },
      },
    };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});
