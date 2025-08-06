import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders portfolio header', () => {
  render(<App />)
  const heading = screen.getByRole('heading', { name: /Thakshila Bandara/i })
  expect(heading).toBeInTheDocument()
})
