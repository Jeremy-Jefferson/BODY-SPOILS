import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Button from '../ui/Button'
import './MobileMenu.css'

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  const location = useLocation()
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  
  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])
  
  // Trap focus within mobile menu when open
  useEffect(() => {
    if (!isOpen) return
    
    const menu = document.querySelector('.mobile-menu-panel')
    if (!menu) return
    
    const focusableElements = menu.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }
    
    document.addEventListener('keydown', handleTabKey)
    firstElement?.focus()
    
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [isOpen])
  
  useEffect(() => {
    onClose()
  }, [location.pathname, onClose])
  
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }
  
  if (!isOpen) return null
  
  return (
    <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="mobile-menu-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="mobile-menu-panel">
        <div className="mobile-menu-header">
          <Logo size="xl" />
          <button 
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`mobile-menu-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={onClose}
              aria-current={isActive(link.path) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="mobile-menu-actions">
          <Button to="/booking" variant="primary" className="w-full" onClick={onClose}>
            Book Now
          </Button>
        </div>
        
        <div className="mobile-menu-footer">
          <p className="mobile-menu-copyright">
            © {new Date().getFullYear()} Body Spoils. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
