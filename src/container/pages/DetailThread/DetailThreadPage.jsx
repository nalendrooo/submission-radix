import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Threads from '../../fragments/Threads';
import { asyncGetDetailThread } from '../../../states/detailThread/action';
import CardDetails from '../../components/Card/CardDetails';

function DetailThreadPage() {
  const { idThread } = useParams();
  const dispatch = useDispatch();
  const { detailThread } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncGetDetailThread(idThread));
  }, [dispatch, idThread]);
  return (
    <Threads>
      {detailThread && <CardDetails detailThread={detailThread} />}
    </Threads>
  );
}

export default DetailThreadPage;
