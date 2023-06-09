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
  asyncGetAllThreads,
  receiveAllThreadsCreator,
} from './action';
import api from '../../utils/api';

const fakeThreadsResponse = [
  {
    id: 'threads-1',
    text: 'threads Test 1',
    ownerId: 'user-1',
    replyTo: '',
    likes: [],
    createdAt: '2022-09-22T10:06:55.588Z',
  },
];

describe('asyncGetAllThreads', () => {
  let originalGetAllThreads;
  let dispatchSpy;
  let getStateSpy;

  beforeEach(() => {
    originalGetAllThreads = api.getAllThreads;
    api.getAllThreads = vi.fn().mockResolvedValue(fakeThreadsResponse);

    dispatchSpy = vi.fn();
    getStateSpy = vi.fn().mockReturnValue({
      users: [
        { id: 'user-1', name: 'John' },
        { id: 'user-2', name: 'Jane' },
      ],
    });
  });

  afterEach(() => {
    api.getAllThreads = originalGetAllThreads;
  });

  it('should dispatch actions correctly when data fetching succeeds', async () => {
    await asyncGetAllThreads()(dispatchSpy, getStateSpy);

    expect(dispatchSpy).toHaveBeenCalledWith(showLoading());
    expect(dispatchSpy).toHaveBeenCalledWith(
      receiveAllThreadsCreator([
        {
          id: 'threads-1',
          text: 'threads Test 1',
          ownerId: 'user-1',
          replyTo: '',
          likes: [],
          createdAt: '2022-09-22T10:06:55.588Z',
          name: 'John',
        },
      ]),
    );
    expect(dispatchSpy).toHaveBeenCalledWith(hideLoading());
    expect(api.getAllThreads).toHaveBeenCalled();
    expect(getStateSpy).toHaveBeenCalled();
  });

  it('should dispatch actions correctly when data fetching fails', async () => {
    const errorMessage = 'Failed to fetch threads';
    api.getAllThreads.mockRejectedValue(new Error(errorMessage));

    await asyncGetAllThreads()(dispatchSpy, getStateSpy);

    expect(dispatchSpy).toHaveBeenCalledWith(showLoading());
    expect(dispatchSpy).toHaveBeenCalledWith(receiveAllThreadsCreator(null));
    expect(dispatchSpy).toHaveBeenCalledWith(hideLoading());
    expect(api.getAllThreads).toHaveBeenCalled();
    expect(getStateSpy).not.toHaveBeenCalled();
  });
});
