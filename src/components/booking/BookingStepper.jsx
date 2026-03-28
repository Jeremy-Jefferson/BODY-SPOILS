import './BookingStepper.css'

const BookingStepper = ({ steps, currentStep, currentIndex }) => {
  return (
    <div className="booking-stepper">
      {steps.map((step, index) => (
        <div 
          key={step.id}
          className={`booking-step ${
            index < currentIndex ? 'completed' : ''
          } ${step.id === currentStep ? 'active' : ''}`}
        >
          <div className="booking-step-indicator">
            {index < currentIndex ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          <span className="booking-step-label">{step.label}</span>
          {index < steps.length - 1 && (
            <div className="booking-step-line" />
          )}
        </div>
      ))}
    </div>
  )
}

export default BookingStepper