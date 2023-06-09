import axios from 'axios';

const URL_BACKEND = 'https://forum-api.dicoding.dev/v1';

const POST = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(
        `${URL_BACKEND}${path}`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
      .then((result) => resolve(result.data))
      .catch((err) => reject(err));
  });
  return promise;
};

const GET = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`${URL_BACKEND}${path}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((result) => resolve(result.data))
      .catch((err) => reject(err));
  });
  return promise;
};

const Login = async (data) => {
  const response = await POST('/login', data);

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { token } = response.data;

  return token;
};

const Register = async (data) => {
  const response = await POST('/register', data);

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { token } = response;

  return token;
};
const sendComment = async (data, id) => {
  const response = await POST(`/threads/${id}/comments`, data);

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { comment } = response.data;

  return comment;
};

const sendNewThreadomment = async (data) => {
  const response = await POST('/threads', data);

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { thread } = response.data;

  return thread;
};

const getOwnProfile = async () => {
  const response = await GET('/users/me');

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { user } = response.data;

  return user;
};

const getAllThreads = async () => {
  const response = await GET('/threads');

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { threads } = response.data;

  return threads;
};

const getAllUsers = async () => {
  const response = await GET('/users');

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { users } = response.data;

  return users;
};

const getDetailThread = async (id) => {
  const response = await GET(`/threads/${id}`);

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { detailThread } = response.data;
  return detailThread;
};
const getAllLeaderboards = async () => {
  const response = await GET('/leaderboards');

  const { status, message } = response;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { leaderboards } = response.data;
  return leaderboards;
};

const putAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const deleteAccessToken = () => {
  localStorage.removeItem('accessToken');
};

const getAccessToken = () => localStorage.getItem('accessToken');

export default {
  Login,
  Register,
  putAccessToken,
  getOwnProfile,
  getAllThreads,
  getAllUsers,
  getDetailThread,
  getAllLeaderboards,
  getAccessToken,
  sendComment,
  sendNewThreadomment,
  deleteAccessToken,
};
