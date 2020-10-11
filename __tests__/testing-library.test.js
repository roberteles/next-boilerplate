import React from 'react'
import { render } from '@testing-library/react'
import App from '../pages/index'

describe("Main", () => {
  it("renders without crashing", () => {
    render(<App />)
    
    // expect(screen.getByRole("heading", { name: "Welcome to Next.js!" })).toBeInTheDocument()
  })
});