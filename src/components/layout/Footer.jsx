import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Logo from './Logo'
import Button from '../ui/Button'
import { siteInfo } from '../../content/siteInfo'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-cta">
        <Container size="md">
          <div className="footer-cta-inner">
            <h2 className="footer-cta-title">Ready to Restore Your Well-being?</h2>
            <p className="footer-cta-text">
              Book your appointment today and experience the transformative power of intentional touch.
            </p>
            <Button to="/booking" variant="primary" size="lg">
              Schedule Your Visit
            </Button>
          </div>
        </Container>
      </div>
      
      <div className="footer-main">
        <Container>
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <Logo size="xl" className="footer-logo" />
              <p className="footer-tagline">{siteInfo.tagline}</p>
              <p className="footer-description">
                {siteInfo.description}
              </p>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-heading">Quick Links</h3>
              <nav className="footer-nav">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/services" className="footer-link">Services</Link>
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/booking" className="footer-link">Book Now</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
              </nav>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-heading">Contact</h3>
              <address className="footer-address">
                <p>{siteInfo.address}</p>
                <p>{siteInfo.city}, {siteInfo.state} {siteInfo.zip}</p>
                <p>
                  <a href={`tel:${siteInfo.phone}`} className="footer-link">
                    {siteInfo.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${siteInfo.email}`} className="footer-link">
                    {siteInfo.email}
                  </a>
                </p>
              </address>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-heading">Hours</h3>
              <div className="footer-hours">
                <div className="footer-hours-row">
                  <span>Mon - Fri</span>
                  <span>{siteInfo.hours.monday.split(' - ')[0]} - {siteInfo.hours.friday.split(' - ')[1]}</span>
                </div>
                <div className="footer-hours-row">
                  <span>Saturday</span>
                  <span>{siteInfo.hours.saturday}</span>
                </div>
                <div className="footer-hours-row">
                  <span>Sunday</span>
                  <span>{siteInfo.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {currentYear} {siteInfo.name}. All rights reserved.
            </p>
            <div className="footer-social">
              <a 
                href={siteInfo.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a 
                href={siteInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* <a 
                href={siteInfo.social.pinterest} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Pinterest"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.88 6.42 9.31-.09-.78-.17-1.98.04-2.83.19-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.44.84-2.52 1.88-2.52.89 0 1.31.66 1.31 1.46 0 .89-.57 2.22-.86 3.46-.24 1.03.52 1.87 1.54 1.87 1.85 0 3.27-1.95 3.27-4.77 0-2.5-1.79-4.24-4.35-4.24-2.96 0-4.7 2.22-4.7 4.52 0 .89.34 1.85.77 2.37.08.1.1.19.07.29-.08.32-.25 1.07-.29 1.22-.05.2-.17.24-.39.14-1.45-.67-2.36-2.64-2.36-4.25 0-3.47 2.52-6.66 7.27-6.66 3.82 0 6.78 2.72 6.78 6.36 0 3.8-2.4 6.86-5.72 6.86-1.12 0-2.17-.58-2.53-1.27l-.69 2.63c-.25.96-.92 2.17-1.37 2.9 1.03.32 2.11.49 3.24.49 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a> */}
            </div>
            <p className="footer-credit">
              Designed & built by <a href="https://www.hungryghost.dev/" target="_blank" rel="noopener noreferrer">Hungry Ghost DEV</a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
