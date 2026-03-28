import './TextArea.css'

const TextArea = ({ 
  label,
  error,
  helpText,
  id,
  className = '',
  rows = 4,
  ...props 
}) => {
  const textareaId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`
  
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={textareaId} className="form-label">
          {label}
        </label>
      )}
      <textarea 
        id={textareaId}
        className={`form-textarea ${error ? 'form-textarea-error' : ''}`}
        rows={rows}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : helpText ? `${textareaId}-help` : undefined}
        {...props}
      />
      {helpText && !error && (
        <span id={`${textareaId}-help`} className="form-help">{helpText}</span>
      )}
      {error && (
        <span id={`${textareaId}-error`} className="form-error" role="alert">{error}</span>
      )}
    </div>
  )
}

export default TextArea