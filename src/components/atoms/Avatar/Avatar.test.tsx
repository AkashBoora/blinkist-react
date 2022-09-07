import { render, screen } from '@testing-library/react';
import { AvatarComponent } from './Avatar';

it('Unit Test - Avatar', () => {
  render(<AvatarComponent letter="A" />);
  const name = screen.getByTestId('Avatar');
  expect(name.textContent).toBe('A');
});