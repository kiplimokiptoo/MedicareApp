import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App shell', () => {
  it('renders the login screen for unauthenticated users', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Welcome back\./i)
  })
})
