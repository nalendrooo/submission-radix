import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Threads from '../../fragments/Threads';
import { asyncSendNewThreads } from '../../../states/threads/action';
import InputThread from '../../components/Input/InputThread';

function NewThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: '',
    body: '',
    category: '',
  });

  const { title, body, category } = state;

  const handleChangeText = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    dispatch(asyncSendNewThreads(state));
    setState({
      title: '',
      body: '',
      category: '',
    });
    navigate('/threads');
  };

  return (
    <Threads>
      <div className="p-4 mx-2 mt-5 mb-20 bg-slate-200 rounded-xl">
        <div className="mb-4 text-2xl font-bold text-center">New Thread</div>
        <div className="flex flex-col gap-5">
          <InputThread
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChangeText}
          />
          <InputThread
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={handleChangeText}
          />
          <textarea
            type="text"
            className="rounded-lg py-2 px-3 focus:outline-none resize-none h-[300px]"
            value={body}
            name="body"
            onChange={handleChangeText}
          />
          <button
            onClick={onSubmit}
            className="py-2 font-semibold text-white rounded-full bg-slate-700"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </Threads>
  );
}

export default NewThreadPage;
