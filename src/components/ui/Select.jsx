import './Select.css'

const Select = ({ 
  label,
  error,
  helpText,
  id,
  options = [],
  placeholder = 'Select an option',
  className = '',
  ...props 
}) => {
  const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`
  
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={selectId} className="form-label">
          {label}
        </label>
      )}
      <select 
        id={selectId}
        className={`form-select ${error ? 'form-select-error' : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${selectId}-error` : helpText ? `${selectId}-help` : undefined}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helpText && !error && (
        <span id={`${selectId}-help`} className="form-help">{helpText}</span>
      )}
      {error && (
        <span id={`${selectId}-error`} className="form-error" role="alert">{error}</span>
      )}
    </div>
  )
}

export default Select