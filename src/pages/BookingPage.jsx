import { useState } from 'react'
import Container from '../components/ui/Container'
import PageHero from '../components/layout/PageHero'
import BookingStepper from '../components/booking/BookingStepper'
import ServiceSelector from '../components/booking/ServiceSelector'
import DateTimePicker from '../components/booking/DateTimePicker'
import ClientDetailsForm from '../components/booking/ClientDetailsForm'
import BookingSummary from '../components/booking/BookingSummary'
import BookingConfirmation from '../components/booking/BookingConfirmation'
import { encodeFormData } from '../utils/encodeFormData'
import './BookingPage.css'

const STEPS = [
  { id: 'service', label: 'Service' },
  { id: 'datetime', label: 'Date & Time' },
  { id: 'details', label: 'Your Details' },
  { id: 'confirm', label: 'Confirmation' }
]

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState('service')
  const [bookingData, setBookingData] = useState({
    service: null,
    date: null,
    time: null,
    client: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      notes: ''
    }
  })
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  
  const handleServiceSelect = (service) => {
    setBookingData(prev => ({ ...prev, service }))
    setCurrentStep('datetime')
  }
  
  const handleDateTimeSelect = (date, time) => {
    setBookingData(prev => ({ ...prev, date, time }))
    setCurrentStep('details')
  }
  
  const handleDetailsSubmit = (clientData) => {
    setBookingData(prev => ({ ...prev, client: clientData }))
    setCurrentStep('confirm')
  }
  
  const handleConfirm = async () => {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      const formData = {
        'form-name': 'booking-request',
        firstName: bookingData.client.firstName,
        lastName: bookingData.client.lastName,
        email: bookingData.client.email,
        phone: bookingData.client.phone,
        notes: bookingData.client.notes || '',
        service: bookingData.service?.title || '',
        date: bookingData.date || '',
        time: bookingData.time || ''
      }
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(formData)
      })
      
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      setIsConfirmed(true)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('Unable to submit your booking request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleBack = () => {
    const currentIndex = STEPS.findIndex(step => step.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(STEPS[currentIndex - 1].id)
    }
  }
  
  const getStepIndex = () => {
    return STEPS.findIndex(step => step.id === currentStep)
  }
  
  const renderStep = () => {
    switch (currentStep) {
      case 'service':
        return (
          <ServiceSelector 
            selectedService={bookingData.service}
            onSelect={handleServiceSelect}
          />
        )
      case 'datetime':
        return (
          <DateTimePicker 
            selectedService={bookingData.service}
            selectedDate={bookingData.date}
            selectedTime={bookingData.time}
            onSelect={handleDateTimeSelect}
            onBack={handleBack}
          />
        )
      case 'details':
        return (
          <ClientDetailsForm 
            clientData={bookingData.client}
            onSubmit={handleDetailsSubmit}
            onBack={handleBack}
          />
        )
      case 'confirm':
        return (
          <BookingSummary 
            bookingData={bookingData}
            onConfirm={handleConfirm}
            onBack={handleBack}
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        )
      default:
        return null
    }
  }
  
  if (isConfirmed) {
    return (
      <div className="booking-page">
        <BookingConfirmation bookingData={bookingData} />
      </div>
    )
  }
  
  return (
    <div className="booking-page">
      {/* Hidden form for Netlify Forms detection during build */}
      <form name="booking-request" data-netlify="true" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="notes"></textarea>
        <input type="text" name="service" />
        <input type="text" name="date" />
        <input type="text" name="time" />
      </form>
      
      <PageHero 
        title="Book Your Massage"
        subtitle="Schedule Your Session"
        background="pink"
      />
      
      <section className="section booking-content">
        <Container size="md">
          <BookingStepper 
            steps={STEPS}
            currentStep={currentStep}
            currentIndex={getStepIndex()}
          />
          
          <div className="booking-form">
            {renderStep()}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default BookingPage
