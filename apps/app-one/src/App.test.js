import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('renders correctly', () => {
    const cmp = render(<App />);
    expect(cmp).toMatchSnapshot();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
