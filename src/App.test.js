// เทมเพลตรองรับการเขียนเทสต์ (ยังไม่ได้ใช้งาน)
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
