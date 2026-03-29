// Services data for Body Spoils - Massage Therapy Only
export const services = [
  {
    id: 'swedish-massage',
    title: 'Swedish Massage',
    description: 'A calming, full-body massage using smooth, flowing strokes to relax the nervous system and ease built-up tension. Perfect for unwinding, improving circulation, and leaving you feeling fully refreshed and restored.',
    duration: '60 min',
    price: 125,
    category: 'relaxation'
  },

  {
    id: 'swedish-massage',
    title: 'Swedish Massage',
    description: 'A calming, full-body massage using smooth, flowing strokes to relax the nervous system and ease built-up tension. Perfect for unwinding, improving circulation, and leaving you feeling fully refreshed and restored.',
    duration: '90 min',
    price: 155,
    category: 'relaxation'
  },

  {
    id: 'deep-tissue-massage',
    title: 'Deep Tissue Massage',
    description: 'A focused, therapeutic massage that works into deeper muscle layers to release chronic tension, tightness, and stubborn knots. Ideal for relieving pain, improving mobility, and restoring proper muscle function.',
    duration: '60 min',
    price: 175,
    category: 'therapeutic'
  },

  {
    id: 'deep-tissue-massage',
    title: 'Deep Tissue Massage',
    description: 'A focused, therapeutic massage that works into deeper muscle layers to release chronic tension, tightness, and stubborn knots. Ideal for relieving pain, improving mobility, and restoring proper muscle function.',
    duration: '90 min',
    price: 145,
    category: 'therapeutic'
  },

  {
    id: 'combo-massage',
    title: 'Combo Massage',
    description: 'A balanced blend of gentle, flowing techniques and targeted deep pressure. This customized session promotes deep relaxation while addressing muscle tension and stubborn knots—perfect for those who want the best of both worlds.',
    duration: '60 min',
    price: 145,
    category: 'specialty'
  },

  {
    id: 'combo-massage',
    title: 'Combo Massage',
    description: 'A balanced blend of gentle, flowing techniques and targeted deep pressure. This customized session promotes deep relaxation while addressing muscle tension and stubborn knots—perfect for those who want the best of both worlds.',
    duration: '90 min',
    price: 165,
    category: 'specialty'
  },

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
