import { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../ui/Container'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'
import './Header.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/booking', label: 'Booking' },
    { path: '/contact', label: 'Contact' }
  ]
  
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }
  
  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])
  
  return (
    <header className="header" role="banner">
      <Container>
        <div className="header-inner">
          <Logo size="xl" />
          
          <nav className="header-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`header-nav-link ${isActive(link.path) ? 'active' : ''}`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="header-actions">
            <Button to="/booking" variant="primary" size="md">
              Book Now
            </Button>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </Container>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
        navLinks={navLinks}
      />
    </header>
  )
}

export default Header
