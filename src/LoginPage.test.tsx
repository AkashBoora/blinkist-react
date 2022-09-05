import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders learn react link', () => {
  render(<LoginPage />);
  const linkElement = screen.getByTestId("login");
  expect(linkElement).toBeInTheDocument();
});
