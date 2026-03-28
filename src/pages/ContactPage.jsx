import { useState } from 'react'
import Container from '../components/ui/Container'
import PageHero from '../components/layout/PageHero'
import Input from '../components/ui/Input'
import TextArea from '../components/ui/TextArea'
import Button from '../components/ui/Button'
import { siteInfo } from '../content/siteInfo'
import './ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitting(false)
      setIsSubmitted(true)
    }
  }
  
  if (isSubmitted) {
    return (
      <div className="contact-page">
        <PageHero 
          title="Contact Us"
          subtitle="Get in Touch"
          background="pink"
        />
        <section className="section contact-content">
          <Container size="sm">
            <div className="contact-success">
              <div className="success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
              <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          </Container>
        </section>
      </div>
    )
  }
  
  return (
    <div className="contact-page">
      <PageHero 
        title="Contact Us"
        subtitle="Get in Touch"
        background="pink"
      />
      
      <section className="section contact-content">
        <Container>
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-info-title">We'd Love to Hear From You</h2>
              <p className="contact-info-text">
                Have questions about our massage therapy services? Want to learn more about 
                our therapeutic massage sessions? We're here to help. Reach out through any 
                of the channels below.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>{siteInfo.address}<br />{siteInfo.city}, {siteInfo.state} {siteInfo.zip}</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a></p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Hours</h4>
                    <p>Mon - Fri: 9am - 8pm<br />Sat: 9am - 6pm<br />Sun: 10am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="contact-form-title">Send Us a Message</h3>
                
                <div className="form-row">
                  <Input 
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Your name"
                  />
                  <Input 
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-row">
                  <Input 
                    label="Phone (Optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                  <Input 
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                  />
                </div>
                
                <TextArea 
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                />
                
                <Button type="submit" variant="primary" size="lg" loading={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ContactPage
