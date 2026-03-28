import './Badge.css'

const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const classNames = `badge badge-${variant} ${className}`.trim()
  
  return (
    <span className={classNames}>
      {children}
    </span>
  )
}

export default Badge