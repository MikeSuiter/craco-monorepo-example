import { render, screen } from '@testing-library/react';
import PinkButton from '@craco/btns/src/components/PinkButton';

describe('PinkButton tests', () => {
  test('renders correctly', () => {
    const cmp = render(<PinkButton label="My Pink Button" />);
    expect(cmp).toMatchSnapshot();
  });

  test('renders correct label', () => {
    render(<PinkButton label="My Pink Button" />);
    const linkElement = screen.getByText(/my pink button/i);
    expect(linkElement).toBeInTheDocument();
  });
});
