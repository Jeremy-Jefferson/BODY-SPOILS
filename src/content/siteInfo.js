// Site information for Body Spoils
export const siteInfo = {
  name: 'Body Spoils',
  tagline: 'Relaxation You Can Afford',
  // description: 'A premium massage therapy practice dedicated to providing personalized, restorative massage experiences that promote relaxation, relieve tension, and support your overall well-being.',
  owner: 'Mykah Jefferson',
  
  // Contact Information
  phone: '(281) 222-7985',
  email: 'bodyspoils@gmail.com',
  address: '123 Serenity Lane, Suite 100',
  city: 'Houston',
  state: 'TX',
  zip: '77021',
  
  // Hours
  hours: {
    monday: '9:00 AM - 7:00 PM',
    tuesday: '9:00 AM - 7:00 PM',
    wednesday: '9:00 AM - 7:00 PM',
    thursday: '9:00 AM - 8:00 PM',
    friday: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: '10:00 AM - 5:00 PM'
  },
  
  // Social Media
  social: {
    facebook: 'https://www.facebook.com/BodySpoilsLMT',
    instagram: 'https://instagram.com/bodyspoils',
    pinterest: 'https://pinterest.com/bodyspoils'
  },
  
  // Navigation
  nav: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Booking', path: '/booking' },
    { label: 'Contact', path: '/contact' }
  ],
  
  // SEO
  seo: {
    title: 'Body Spoils | Premium Massage Therapy',
    keywords: 'massage, massage therapy, deep tissue, hot stone, aromatherapy, prenatal massage, relaxation, stress relief, tension release',
    author: 'Mykah Jefferson'
  }
}

// Format address for display
export const formatAddress = () => {
  return `${siteInfo.address}, ${siteInfo.city}, ${siteInfo.state} ${siteInfo.zip}`
}

// Get current day hours
export const getTodayHours = () => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const today = days[new Date().getDay()]
  return siteInfo.hours[today]
}

// Format phone for display
export const formatPhone = () => {
  return siteInfo.phone
}
