import React from 'react'
import { render, screen } from '@testing-library/react'
import LoginPage from './components/LoginPage'

test('renders the login form with sign in button', () => {
  render(<LoginPage onLogin={() => {}} onSwitchToSignup={() => {}} />)
  expect(screen.getByRole('button', { name: /sign in/i })).toBeTruthy()
  expect(screen.getByLabelText(/Email address/i)).toBeTruthy()
})
