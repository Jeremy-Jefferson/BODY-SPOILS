import { useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import './ClientDetailsForm.css'

const ClientDetailsForm = ({ clientData, onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: clientData.firstName || '',
    lastName: clientData.lastName || '',
    email: clientData.email || '',
    phone: clientData.phone || '',
    notes: clientData.notes || ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const validate = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (e.g., (555) 123-4567)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      setIsSubmitting(false)
      onSubmit(formData)
    }
  }
  
  return (
    <div className="client-details-form">
      <h3 className="client-details-title">Your Details</h3>
      <p className="client-details-subtitle">
        Please provide your contact information to complete the booking
      </p>
      
      <form onSubmit={handleSubmit} className="client-form">
        <div className="form-row">
          <Input 
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            placeholder="Enter your first name"
          />
          <Input 
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            placeholder="Enter your last name"
          />
        </div>
        
        <Input 
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="your@email.com"
        />
        
        <Input 
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="(555) 123-4567"
        />
        
        <TextArea 
          label="Special Requests or Notes (Optional)"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any preferences or health concerns we should know about?"
          rows={3}
        />
        
        <div className="client-form-actions">
          <Button type="button" variant="ghost" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" variant="primary" loading={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Continue to Confirmation'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ClientDetailsForm