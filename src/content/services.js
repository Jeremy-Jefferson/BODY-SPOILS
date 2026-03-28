// Services data for Body Spoils - Massage Therapy Only
export const services = [
  {
    id: 'swedish-massage',
    title: 'Swedish Massage',
    description: 'A gentle, flowing massage that eases tension and promotes deep relaxation. Ideal for stress relief and first-time visitors.',
    duration: '60 min',
    price: 95,
    category: 'relaxation'
  },
  {
    id: 'deep-tissue-massage',
    title: 'Deep Tissue Massage',
    description: 'Focused pressure targeting deeper muscle layers to release chronic tension and knots. Best for those with persistent pain or muscular discomfort.',
    duration: '60 min',
    price: 115,
    category: 'therapeutic'
  },
  {
    id: 'hot-stone-therapy',
    title: 'Hot Stone Therapy',
    description: 'Heated basalt stones placed on key points to melt tension and promote deep relaxation. A luxurious, warming experience for total body renewal.',
    duration: '75 min',
    price: 135,
    category: 'relaxation'
  },
  {
    id: 'sports-massage',
    title: 'Sports Massage',
    description: 'Targeted work on muscle groups used in your activities to enhance performance, prevent injury, and speed recovery. Perfect for active individuals.',
    duration: '60 min',
    price: 110,
    category: 'therapeutic'
  },
  {
    id: 'aromatherapy',
    title: 'Aromatherapy Massage',
    description: 'Essential oils paired with gentle massage to nurture body and mind. Choose from our curated blends for your desired mood and benefit.',
    duration: '60 min',
    price: 105,
    category: 'relaxation'
  },
  {
    id: 'prenatal-massage',
    title: 'Prenatal Massage',
    description: 'Safe, nurturing massage designed for expecting mothers to relieve pregnancy discomfort and promote deep relaxation.',
    duration: '60 min',
    price: 100,
    category: 'specialty'
  },
  {
    id: 'couples-massage',
    title: 'Couples Massage',
    description: 'Share a relaxing experience with a loved one in our private double room. Both receive customized massages side by side.',
    duration: '60 min',
    price: 220,
    category: 'specialty'
  },
  {
    id: 'lymphatic-drainage',
    title: 'Lymphatic Drainage Massage',
    description: 'A gentle, rhythmic massage that stimulates the lymphatic system to reduce swelling, support immune function, and promote detoxification. Ideal for post-surgical recovery or fluid retention.',
    duration: '60 min',
    price: 110,
    category: 'therapeutic'
  }
]

export const getServicesByCategory = (category) => {
  if (category === 'all') return services
  return services.filter(service => service.category === category)
}

export const getServiceById = (id) => {
  return services.find(service => service.id === id)
}

export const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'relaxation', label: 'Relaxation' },
  { id: 'therapeutic', label: 'Therapeutic' },
  { id: 'specialty', label: 'Specialty' }
]
