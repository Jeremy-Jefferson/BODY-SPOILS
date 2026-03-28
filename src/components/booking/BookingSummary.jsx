import Button from '../ui/Button'
import './BookingSummary.css'

const BookingSummary = ({ bookingData, onConfirm, onBack }) => {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  return (
    <div className="booking-summary">
      <h3 className="booking-summary-title">Review Your Booking</h3>
      <p className="booking-summary-subtitle">
        Please confirm your appointment details before submitting
      </p>
      
      <div className="booking-summary-content">
        <div className="summary-section">
          <h4 className="summary-section-title">Service</h4>
          <div className="summary-item">
            <span className="summary-label">Treatment</span>
            <span className="summary-value">{bookingData.service?.title}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Duration</span>
            <span className="summary-value">{bookingData.service?.duration}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Price</span>
            <span className="summary-value summary-price">${bookingData.service?.price}</span>
          </div>
        </div>
        
        <div className="summary-section">
          <h4 className="summary-section-title">Appointment</h4>
          <div className="summary-item">
            <span className="summary-label">Date</span>
            <span className="summary-value">{formatDate(bookingData.date)}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Time</span>
            <span className="summary-value">{bookingData.time}</span>
          </div>
        </div>
        
        <div className="summary-section">
          <h4 className="summary-section-title">Your Information</h4>
          <div className="summary-item">
            <span className="summary-label">Name</span>
            <span className="summary-value">
              {bookingData.client?.firstName} {bookingData.client?.lastName}
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Email</span>
            <span className="summary-value">{bookingData.client?.email}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Phone</span>
            <span className="summary-value">{bookingData.client?.phone}</span>
          </div>
          {bookingData.client?.notes && (
            <div className="summary-item">
              <span className="summary-label">Notes</span>
              <span className="summary-value">{bookingData.client?.notes}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="booking-summary-actions">
        <Button variant="ghost" onClick={onBack}>
          Back
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Confirm Booking
        </Button>
      </div>
    </div>
  )
}

export default BookingSummary