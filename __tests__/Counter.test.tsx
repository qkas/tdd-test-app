import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from "@/components/Counter";

describe('Counter', () => {
  it('renders counter with name and initial count', () => {
    render(<Counter name="Test Counter" />)
    expect(screen.getByText('Test Counter')).toBeInTheDocument()
    expect(screen.getByText('Score: 1')).toBeInTheDocument()
  })

  it('increments count when + button is clicked', () => {
    render(<Counter name="Test Counter" />)
    const incrementButton = screen.getByText('+')
    fireEvent.click(incrementButton)
    expect(screen.getByText('Score: 1')).toBeInTheDocument()
  })

  it('decrements count when - button is clicked', () => {
    render(<Counter name="Test Counter" />)
    const incrementButton = screen.getByText('+')
    fireEvent.click(incrementButton)
    const decrementButton = screen.getByText('-')
    fireEvent.click(decrementButton)
    expect(screen.getByText('Score: 0')).toBeInTheDocument()
  })

  it('does not decrement below 0', () => {
    render(<Counter name="Test Counter" />)
    const decrementButton = screen.getByText('-')
    fireEvent.click(decrementButton)
    expect(screen.getByText('Score: 0')).toBeInTheDocument()
  })

  it('resets count to 0 when Reset button is clicked', () => {
    render(<Counter name="Test Counter" />)
    const incrementButton = screen.getByText('+')
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    const resetButton = screen.getByText('Reset')
    fireEvent.click(resetButton)
    expect(screen.getByText('Score: 0')).toBeInTheDocument()
  })
})
