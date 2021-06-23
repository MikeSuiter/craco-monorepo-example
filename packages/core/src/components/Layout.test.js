import { render, screen } from '@testing-library/react';
import { Layout } from '@craco/core/src';

describe('Layout tests', () => {
  test('renders correctly', () => {
    const cmp = render(<Layout />);
    expect(cmp).toMatchSnapshot();
  });

  test('renders blue button', () => {
    render(<Layout />);
    const linkElement = screen.getByText(/remote blue/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders pink button', () => {
    render(<Layout />);
    const linkElement = screen.getByText(/remote pink/i);
    expect(linkElement).toBeInTheDocument();
  });
});
