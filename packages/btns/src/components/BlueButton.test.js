import { render, screen } from '@testing-library/react';
import BlueButton from '@craco/btns/src/components/BlueButton';

describe('BlueButton tests', () => {
  test('renders correctly', () => {
    const cmp = render(<BlueButton label="My Blue Button" />);
    expect(cmp).toMatchSnapshot();
  });

  test('renders correct label', () => {
    render(<BlueButton label="My Blue Button" />);
    const linkElement = screen.getByText(/my blue button/i);
    expect(linkElement).toBeInTheDocument();
  });
});
