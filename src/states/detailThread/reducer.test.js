import { describe, it, expect } from 'vitest';
import detailThreadReducer from './reducer';

describe('detailThreadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = {};
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = detailThreadReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the talks when given by RECEIVE_DETAIL_THREAD action', () => {
    // arrange
    const initialState = {};
    const action = {
      type: 'RECEIVE_DETAIL_THREAD',
      payload: {
        detailThread: {
          id: 'threds-1',
          thread: 'threds-1',
          title: 'threds-1',
        },
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });

  it('should return the talks with the new talk when given by ADD_COMMENT_THREAD action', () => {
    // arrange
    const initialState = {
      comments: [
        {
          ownerId: 'id-1',
          body: 'body comment-1',
        },
      ],
    };
    const action = {
      type: 'ADD_COMMENT_THREAD',
      payload: {
        comment: {
          ownerId: 'id-2',
          body: 'body comment-2',
        },
      },
    };
    // action
    const nextState = detailThreadReducer(initialState, action);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });
});
