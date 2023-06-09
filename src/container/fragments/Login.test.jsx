import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { Provider } from 'react-redux';
import store from '../../states';
import Login from './Login';

expect.extend(matchers);

describe('Login component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    const emailInput = await screen.getByPlaceholderText('Please enter your email address');

    // Action
    await userEvent.type(emailInput, 'emailtest');

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    const passwordInput = await screen.getByPlaceholderText('Please enter your password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });
  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(
      <Provider store={store}>
        <Login login={mockLogin} />
      </Provider>,
    );
    const emailInput = await screen.getByPlaceholderText('Please enter your email address');
    await userEvent.type(emailInput, 'emailtest');
    const passwordInput = await screen.getByPlaceholderText('Please enter your password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Masuk' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
