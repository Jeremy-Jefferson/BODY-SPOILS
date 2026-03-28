import { useState } from 'react'
import Container from '../components/ui/Container'
import PageHero from '../components/layout/PageHero'
import BookingStepper from '../components/booking/BookingStepper'
import ServiceSelector from '../components/booking/ServiceSelector'
import DateTimePicker from '../components/booking/DateTimePicker'
import ClientDetailsForm from '../components/booking/ClientDetailsForm'
import BookingSummary from '../components/booking/BookingSummary'
import BookingConfirmation from '../components/booking/BookingConfirmation'
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
  
  const handleConfirm = () => {
    setIsConfirmed(true)
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
