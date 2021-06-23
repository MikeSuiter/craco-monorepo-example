import { render, screen } from '@testing-library/react';
import LocalButton from '@craco/app-one/src/components/LocalButton';

describe('LocalButton tests', () => {
  test('renders correctly', () => {
    const cmp = render(<LocalButton label="My Local Button" />);
    expect(cmp).toMatchSnapshot();
  });

  test('renders correct label', () => {
    render(<LocalButton label="My Local Button" />);
    const linkElement = screen.getByText(/my local button/i);
    expect(linkElement).toBeInTheDocument();
  });
});
