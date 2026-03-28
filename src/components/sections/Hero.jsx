import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Button from '../ui/Button'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      <Container size="lg">
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to Body Spoils</span>
          <h1 className="hero-title">
            Restore Your Natural
            <span className="hero-title-accent"> Balance</span>
          </h1>
          <p className="hero-description">
            Experience the transformative power of intentional touch. Our premium massage 
            therapy and wellness services are designed to help you relax, rejuvenate, and 
            reconnect with your best self.
          </p>
          <div className="hero-actions">
            <Button to="/booking" variant="primary" size="lg">
              Book Your Experience
            </Button>
            <Button to="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Professional Therapists</span>
            </div>
            <div className="hero-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Premium Treatments</span>
            </div>
            <div className="hero-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Tranquil Environment</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero