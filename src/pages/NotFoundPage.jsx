import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Container size="sm">
        <div className="not-found-content">
          <div className="not-found-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-text">
            The page you're looking for seems to have wandered off. 
            Let's get you back on the right path.
          </p>
          <div className="not-found-actions">
            <Button to="/" variant="primary" size="lg">
              Return Home
            </Button>
            <Button to="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NotFoundPage