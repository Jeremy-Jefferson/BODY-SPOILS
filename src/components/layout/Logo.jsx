import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = ({ size = 'md', className = '' }) => {
  const classNames = `logo logo-${size} ${className}`.trim()
  
  return (
    <Link to="/" className={classNames} aria-label="Body Spoils - Home">
      <img 
        src="/Body Spoils.svg" 
        alt="Body Spoils" 
        className="logo-img"
      />
    </Link>
  )
}

export default Logo
