// Testimonials data for Body Spoils - Massage Therapy Focus
export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Local Resident',
    rating: 5,
    text: 'Absolutely transformative experience. The attention to detail and personalized care at Body Spoils is unmatched. I leave every session feeling renewed and completely relaxed.',
    service: 'Swedish Massage'
  },
  {
    id: 2,
    name: 'Jennifer L.',
    location: 'First-time Visitor',
    rating: 5,
    text: 'From the moment I walked in, I felt at ease. The atmosphere is incredibly calming and the therapists are genuinely caring. This is my go-to for self-care.',
    service: 'Hot Stone Therapy'
  },
  {
    id: 3,
    name: 'Amanda K.',
    location: 'Regular Client',
    rating: 5,
    text: 'The deep tissue massage was exactly what I needed after months of tension. The therapist listened to my concerns and tailored the session perfectly. Highly recommend!',
    service: 'Deep Tissue Massage'
  },
  {
    id: 4,
    name: 'Rachel T.',
    location: 'Prenatal Client',
    rating: 5,
    text: 'The prenatal massage was a lifesaver during my pregnancy. The team is knowledgeable about safe positioning and the relief I felt afterward was incredible.',
    service: 'Prenatal Massage'
  },
  {
    id: 5,
    name: 'Michelle R.',
    location: 'Couples Experience',
    rating: 5,
    text: 'Booked the couples massage for my anniversary and it was perfect. The private room, synchronized experience, and attention to both of us made it unforgettable.',
    service: 'Couples Massage'
  },
  {
    id: 6,
    name: 'David S.',
    location: 'Regular Client',
    rating: 5,
    text: 'As an athlete, I rely on sports massage to keep me performing at my best. The therapists here understand muscle recovery and always target the right areas.',
    service: 'Sports Massage'
  }
]

export const getTestimonialById = (id) => {
  return testimonials.find(testimonial => testimonial.id === id)
}

export const getRandomTestimonials = (count = 3) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
