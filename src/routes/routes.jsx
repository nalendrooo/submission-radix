import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardPage from '../container/pages/Threads/ThreadsPage';
import DetailThreadPage from '../container/pages/DetailThread/DetailThreadPage';
import NewThreadPage from '../container/pages/Threads/NewThreadPage';
import Leaderboards from '../container/pages/Leaderboards/Leaderboards';
import UserProfilePage from '../container/pages/User/UserProfilePage';
import LoginPage from '../container/pages/AuthPage/ExLoginPage';
import RegisterPage from '../container/pages/AuthPage/ExRegisterPage';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/threads/detail/:idThread',
    element: <DetailThreadPage />,
  },
  {
    path: '/threads/new',
    element: <NewThreadPage />,
  },
  {
    path: '/leaderboards',
    element: <Leaderboards />,
  },
  {
    path: '/profile',
    element: <UserProfilePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
