import { render, screen } from '@testing-library/react';
import App from './App';

test('component App was rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/My new amazing App !/i);
  expect(linkElement).toBeInTheDocument();
});
