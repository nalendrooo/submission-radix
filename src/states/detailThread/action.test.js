import {
  describe,
  beforeEach,
  afterEach,
  it,
  expect,
  vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  asyncGetDetailThread,
  receiveDetailThreadCreator,
} from './action';
import api from '../../utils/api';

const fakeDetailThreadsResponse = {
  id: 'threads-1',
  text: 'threads Test 1',
  ownerId: 'user-1',
  replyTo: '',
  likes: [],
  createdAt: '2022-09-22T10:06:55.588Z',
};

describe('asyncGetDetailThread', () => {
  let originalgetDetailThread;
  let dispatchSpy;
  let getStateSpy;

  beforeEach(() => {
    originalgetDetailThread = api.getDetailThread;
    api.getDetailThread = vi.fn().mockResolvedValue(fakeDetailThreadsResponse);

    dispatchSpy = vi.fn();
  });

  afterEach(() => {
    api.getDetailThread = originalgetDetailThread;
  });

  it('should dispatch actions correctly when data fetching succeeds', async () => {
    await asyncGetDetailThread()(dispatchSpy, getStateSpy);

    expect(dispatchSpy).toHaveBeenCalledWith(showLoading());
    expect(dispatchSpy).toHaveBeenCalledWith(
      receiveDetailThreadCreator(fakeDetailThreadsResponse),
    );
    expect(dispatchSpy).toHaveBeenCalledWith(hideLoading());
    expect(api.getDetailThread).toHaveBeenCalled();
  });
});
