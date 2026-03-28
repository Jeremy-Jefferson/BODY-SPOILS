import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Hero from '../components/sections/Hero'
import { services } from '../content/services'
import { testimonials } from '../content/testimonials'
import './HomePage.css'

const HomePage = () => {
  const featuredServices = services.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />
      
      {/* Brand Intro / Benefits */}
      <section className="section brand-intro">
        <Container size="md">
          <div className="brand-intro-content">
            <SectionHeading 
              title="A Sanctuary for Your Well-being"
              subtitle="Welcome to Body Spoils"
              alignment="center"
            />
            <p className="brand-intro-text">
              At Body Spoils, we believe that true wellness comes from nurturing both body and mind. 
              Our boutique spa offers a curated selection of massage therapies and wellness treatments, 
              each designed to restore your natural balance and leave you feeling renewed.
            </p>
            <div className="brand-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="benefit-title">Personalized Care</h3>
                <p className="benefit-text">Every treatment is tailored to your unique needs and preferences.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="benefit-title">Expert Therapists</h3>
                <p className="benefit-text">Our certified professionals bring years of experience and compassionate care.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="benefit-title">Premium Experience</h3>
                <p className="benefit-text">An atmosphere of tranquility designed to transport you from daily stress.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Services Preview */}
      <section className="section services-preview bg-alt">
        <Container>
          <div className="services-preview-header">
            <SectionHeading 
              title="Our Signature Services"
              subtitle="Treatments"
              alignment="left"
            />
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
          <div className="services-grid">
            {featuredServices.map((service) => (
              <Card key={service.id} hover className="service-card">
                <div className="service-card-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-meta">
                    <span className="service-duration">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {service.duration}
                    </span>
                    <span className="service-price">${service.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Why Choose Us */}
      <section className="section why-choose">
        <Container>
          <div className="why-choose-grid">
            <div className="why-choose-content">
              <SectionHeading 
                title="Why Choose Body Spoils"
                subtitle="Our Promise"
                alignment="left"
              />
              <p className="why-choose-text">
                We understand that your time is precious, and you deserve an experience that 
                goes beyond the ordinary. Here's what sets us apart:
              </p>
              <ul className="why-choose-list">
                <li>
                  <span className="check-icon">✓</span>
                  <span>Consistently high ratings and repeat clients</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Premium products and clean, serene environment</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Flexible scheduling and convenient location</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
              <Button to="/about" variant="primary">
                Learn More About Us
              </Button>
            </div>
            <div className="why-choose-image">
              <div className="why-choose-image-inner">
                <img 
                  src="/Body Spoils Crest.svg" 
                  alt="Body Spoils Crest" 
                  className="why-choose-crest-img"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Preview */}
      <section className="section testimonials-preview bg-pink-soft">
        <Container>
          <SectionHeading 
            title="What Our Clients Say"
            subtitle="Testimonials"
            alignment="center"
          />
          <div className="testimonials-grid">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} variant="subtle" className="testimonial-card">
                <div className="testimonial-card-body">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="testimonials-cta">
            <Button to="/contact" variant="primary">
              Share Your Experience
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Booking CTA */}
      <section className="section booking-cta">
        <Container size="md">
          <div className="booking-cta-inner">
            <SectionHeading 
              title="Ready to Begin Your Journey?"
              subtitle="Book Now"
              alignment="center"
            />
            <p className="booking-cta-text">
              Take the first step toward renewed well-being. Schedule your appointment today 
              and discover the Body Spoils difference.
            </p>
            <Button to="/booking" variant="primary" size="lg">
              Book Your Appointment
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default HomePage