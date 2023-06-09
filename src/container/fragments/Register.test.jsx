import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { Provider } from 'react-redux';
import store from '../../states';
import Register from './Register';

expect.extend(matchers);

describe('Register component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle username typing correctly', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const usernameInput = await screen.getByPlaceholderText('Please enter your name');

    // Action
    await userEvent.type(usernameInput, 'usernametest');

    // Assert
    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <Register />
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
        <Register />
      </Provider>,
    );
    const passwordInput = await screen.getByPlaceholderText('Please enter your password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });
  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(
      <Provider store={store}>
        <Register register={mockRegister} />
      </Provider>,
    );
    const nameInput = await screen.getByPlaceholderText('Please enter your name');
    await userEvent.type(nameInput, 'usernametest');
    const emailInput = await screen.getByPlaceholderText('Please enter your email address');
    await userEvent.type(emailInput, 'emailtest');
    const passwordInput = await screen.getByPlaceholderText('Please enter your password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', { name: 'Daftar' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toHaveBeenCalledWith({
      name: 'usernametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
    // Assert
  });
});
