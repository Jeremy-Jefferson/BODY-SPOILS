import './Input.css'

const Input = ({ 
  label,
  error,
  helpText,
  id,
  className = '',
  ...props 
}) => {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`
  
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <input 
        id={inputId}
        className={`form-input ${error ? 'form-input-error' : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
        {...props} 
      />
      {helpText && !error && (
        <span id={`${inputId}-help`} className="form-help">{helpText}</span>
      )}
      {error && (
        <span id={`${inputId}-error`} className="form-error" role="alert">{error}</span>
      )}
    </div>
  )
}

export default Input