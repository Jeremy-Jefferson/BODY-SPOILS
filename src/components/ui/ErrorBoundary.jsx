import { Component } from 'react'
import Container from './Container'
import Button from './Button'
import './ErrorBoundary.css'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <Container size="sm">
            <div className="error-boundary-content">
              <div className="error-boundary-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h1 className="error-boundary-title">Something went wrong</h1>
              <p className="error-boundary-text">
                We're sorry, but something unexpected happened. Please try again or contact us if the problem persists.
              </p>
              <div className="error-boundary-actions">
                <Button variant="primary" onClick={this.handleReset}>
                  Try Again
                </Button>
                <Button to="/" variant="secondary">
                  Return Home
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
