import { render, screen } from '@testing-library/react';
//import App from './App';
import Trangchu from './Trangchu';

test('renders learn react link', () => {
  //render(<App />);
  render(<Trangchu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
