import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllThreads } from '../../../states/threads/action';
import { asyncGetAllUsers } from '../../../states/users/action';
import Card from '../../components/Card/Card';
import Threads from '../../fragments/Threads';

function ThreadsPage() {
  const dispatch = useDispatch();

  const { threads } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncGetAllThreads());
    dispatch(asyncGetAllUsers());
  }, [dispatch]);

  return (
    <Threads>
      <div className="my-3 text-sm text-center">
        Show
        <span className="mx-2 font-bold">{threads.length}</span>
        Thread
      </div>

      {threads
        ? threads.map((thread) => <Card key={thread.id} thread={thread} />)
        : null}
    </Threads>
  );
}

export default ThreadsPage;
