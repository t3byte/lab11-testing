import { render, screen } from '@testing-library/react';
import Task3_ItemList from '../components/Task3_ItemList';

test('checks if "Banana" is in the list', () => {
  render(<Task3_ItemList />);
  expect(screen.getByText('Banana')).toBeInTheDocument();
});
