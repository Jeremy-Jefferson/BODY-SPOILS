import { useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import './DateTimePicker.css'

const DateTimePicker = ({ selectedService, selectedDate, selectedTime, onSelect, onBack }) => {
  const [date, setDate] = useState(selectedDate || '')
  const [time, setTime] = useState(selectedTime || '')
  
  const handleKeyDown = (e, slot) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setTime(slot)
    }
  }
  
  // Generate available time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM'
  ]
  
  // Get minimum date (tomorrow)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]
  
  const handleContinue = () => {
    if (date && time) {
      onSelect(date, time)
    }
  }
  
  return (
    <div className="datetime-picker">
      <h3 className="datetime-picker-title">Select Date & Time</h3>
      <p className="datetime-picker-subtitle">
        Choose your preferred appointment time for {selectedService?.title}
      </p>
      
      <div className="datetime-form">
        <div className="datetime-field">
          <label className="form-label">Date</label>
          <input 
            type="date" 
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={minDate}
          />
        </div>
        
        <div className="datetime-field">
          <label className="form-label">Available Times</label>
          <div className="time-slots">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`time-slot ${time === slot ? 'selected' : ''}`}
                onClick={() => setTime(slot)}
                onKeyDown={(e) => handleKeyDown(e, slot)}
                aria-pressed={time === slot}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="datetime-actions">
        <Button variant="ghost" onClick={onBack}>
          Back
        </Button>
        <Button 
          variant="primary" 
          onClick={handleContinue}
          disabled={!date || !time}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

export default DateTimePicker