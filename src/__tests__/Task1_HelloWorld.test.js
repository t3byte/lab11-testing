import { render, screen } from '@testing-library/react';
import Task1_HelloWorld from '../components/Task1_HelloWorld';

test('renders HelloWorld component', () => {
  render(<Task1_HelloWorld />);
  const heading = screen.getByTestId('hello-heading');
  expect(heading).toBeInTheDocument();
});
