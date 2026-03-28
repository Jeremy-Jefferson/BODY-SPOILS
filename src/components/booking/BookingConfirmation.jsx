import Container from '../ui/Container'
import Button from '../ui/Button'
import './BookingConfirmation.css'

const BookingConfirmation = ({ bookingData }) => {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  return (
    <div className="booking-confirmation">
      <Container size="sm">
        <div className="confirmation-content">
          <div className="confirmation-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          
          <h1 className="confirmation-title">Request Received</h1>
          <p className="confirmation-text">
            Your booking request has been submitted successfully. We'll follow up to confirm your appointment details.
          </p>
          
          <div className="confirmation-details">
            <div className="confirmation-detail">
              <span className="detail-label">Service</span>
              <span className="detail-value">{bookingData.service?.title}</span>
            </div>
            <div className="confirmation-detail">
              <span className="detail-label">Date</span>
              <span className="detail-value">{formatDate(bookingData.date)}</span>
            </div>
            <div className="confirmation-detail">
              <span className="detail-label">Time</span>
              <span className="detail-value">{bookingData.time}</span>
            </div>
          </div>
          
          <p className="confirmation-note">
            We've received your request and will contact you at {bookingData.client?.email} to confirm your appointment. 
            Please note that your booking is not finalized until you receive confirmation from us.
          </p>
          
          <div className="confirmation-actions">
            <Button to="/" variant="secondary">
              Return Home
            </Button>
            <Button to="/booking" variant="primary">
              Book Another
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BookingConfirmation
