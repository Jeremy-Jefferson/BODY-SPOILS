import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  ...props 
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''} ${className}`.trim()
  
  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {children}
      </Link>
    )
  }
  
  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button 
      type={type} 
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className="btn-spinner" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" strokeDasharray="60" strokeDashoffset="60" />
          </svg>
        </span>
      ) : null}
      <span className={loading ? 'btn-text-loading' : ''}>{children}</span>
    </button>
  )
}

export default Button