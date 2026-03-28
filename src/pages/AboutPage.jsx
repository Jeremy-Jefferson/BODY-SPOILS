import Container from '../components/ui/Container'
import PageHero from '../components/layout/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { testimonials } from '../content/testimonials'
import { siteInfo } from '../content/siteInfo'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <PageHero 
        title="About Body Spoils"
        subtitle="Our Story"
        background="pink"
        actions={[
          { to: '/booking', label: 'Book a Massage', variant: 'primary' }
        ]}
      />
      
      {/* Story Section */}
      <section className="section about-story">
        <Container>
          <div className="about-story-grid">
            <div className="about-story-image">
              <img 
                src="/Body Spoils Crest.svg" 
                alt="Body Spoils Crest" 
                className="about-crest-img"
              />
            </div>
            <div className="about-story-content">
              <SectionHeading 
                title="A Passion for Massage Therapy"
                subtitle="Our Mission"
                alignment="left"
              />
              <p>
                Founded by {siteInfo.owner}, Body Spoils was created with a vision to provide 
                exceptional massage therapy experiences that promote relaxation, relieve tension, 
                and support overall well-being.
              </p>
              <p>
                We believe that everyone deserves a space to pause, reconnect, and heal through 
                the power of therapeutic touch. Our approach combines traditional massage techniques 
                with modern understanding to deliver sessions that truly transform.
              </p>
              <p>
                Every detail of our space, every massage we offer, and every interaction we have is 
                designed to help you feel welcomed, valued, and on your path to better well-being.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Values Section */}
      <section className="section about-values bg-pink-soft">
        <Container>
          <SectionHeading 
            title="Our Core Values"
            subtitle="What We Stand For"
            alignment="center"
          />
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Compassion</h3>
              <p>We approach every client with genuine care and empathy, understanding that each person's journey to relaxation is unique.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We are committed to the highest standards in our massage techniques, products, and client care.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Authenticity</h3>
              <p>We stay true to ourselves and our mission, creating genuine connections with our community.</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Team Section */}
      <section className="section about-team">
        <Container>
          <SectionHeading 
            title="Meet Your Massage Therapist"
            subtitle="Our Team"
            alignment="center"
          />
          <div className="team-feature">
            <div className="team-feature-image">
              <img 
                src="/MYKAH.webp" 
                alt="Mykah Jefferson - Licensed Massage Therapist" 
                className="team-profile-img"
              />
            </div>
            <div className="team-feature-content">
              <h3 className="team-name">Mykah Jefferson</h3>
              <span className="team-role">Licensed Massage Therapist</span>
              <p className="team-bio">
                Mykah believes that massage therapy is more than a service—it's a partnership in your well-being. 
                With an intuitive touch and a calming presence, she creates a space where you can truly let go. 
                Whether you're seeking relief from chronic tension or simply need a moment of peace, 
                Mykah tailors each session to your body's unique needs.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="section about-testimonials bg-alt">
        <Container>
          <SectionHeading 
            title="Client Love"
            subtitle="Testimonials"
            alignment="center"
          />
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} variant="flat" className="testimonial-card">
                <div className="testimonial-card-body">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="section about-cta">
        <Container size="md">
          <div className="about-cta-inner">
            <h2>Experience the Body Spoils Difference</h2>
            <p>We'd love to welcome you to our massage therapy sanctuary. Book your appointment today.</p>
            <Button to="/booking" variant="primary" size="lg">
              Book Your Massage
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutPage
