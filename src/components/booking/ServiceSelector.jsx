import { services } from '../../content/services'
import Button from '../ui/Button'
import './ServiceSelector.css'

const ServiceSelector = ({ selectedService, onSelect }) => {
  const handleKeyDown = (e, service) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(service)
    }
  }
  
  return (
    <div className="service-selector">
      <h3 className="service-selector-title">Choose Your Massage</h3>
      <p className="service-selector-subtitle">Select the treatment you'd like to book</p>
      
      <div className="service-selector-list">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`service-option ${
              selectedService?.id === service.id ? 'selected' : ''
            }`}
            onClick={() => onSelect(service)}
            onKeyDown={(e) => handleKeyDown(e, service)}
            tabIndex={0}
            role="button"
            aria-pressed={selectedService?.id === service.id}
          >
            <div className="service-option-content">
              <h4 className="service-option-title">{service.title}</h4>
              <p className="service-option-description">{service.description}</p>
              <div className="service-option-meta">
                <span className="service-option-duration">{service.duration}</span>
                <span className="service-option-price">${service.price}</span>
              </div>
            </div>
            <div className="service-option-action">
              <Button variant="secondary" size="sm">
                {selectedService?.id === service.id ? 'Selected' : 'Select'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceSelector
