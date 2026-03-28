import { useState } from 'react'
import Container from '../components/ui/Container'
import PageHero from '../components/layout/PageHero'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { services, categories } from '../content/services'
import './ServicesPage.css'

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)
  
  return (
    <div className="services-page">
      <PageHero 
        title="Personalized Massage Therapy"
        subtitle="Tailored sessions for relaxation, relief, and restoration"
        background="pink"
        actions={[
          { to: '/booking', label: 'Book Your Session', variant: 'primary' }
        ]}
      />
      
      <section className="section services-categories">
        <Container>
          <div className="category-filters">
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="section services-list">
        <Container>
          <div className="services-grid">
            {filteredServices.map((service) => (
              <Card key={service.id} hover variant="flat" className="service-card">
                <div className="service-card-content">
                  <div className="service-header">
                    <h3 className="service-title">{service.title}</h3>
                    <span className="service-price">${service.price}</span>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <span className="service-duration">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {service.duration}
                    </span>
                    <Button to="/booking" variant="secondary" size="sm">
                      Book
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="section services-cta bg-pink-soft">
        <Container size="md">
          <div className="services-cta-content">
            <h2>Not Sure Which Massage Is Right for You?</h2>
            <p>
              We understand every body is different. Our therapists will listen to your needs 
              and recommend the perfect session—whether you're seeking deep relief or gentle relaxation.
            </p>
            <Button to="/contact" variant="primary">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ServicesPage
