// FAQs data for Body Spoils - Massage Therapy Focus
export const faqs = [
  {
    id: 1,
    question: 'What should I expect during my first massage therapy session?',
    answer: 'Upon arrival, you\'ll be welcomed by our front desk team and asked to complete a brief health questionnaire. Your therapist will then escort you to a private room where they\'ll discuss your preferences, any areas of concern, and the type of massage that best suits your needs before beginning your session. We recommend arriving 15 minutes early to enjoy a relaxing beverage and settle in.'
  },
  {
    id: 2,
    question: 'What should I wear to my massage appointment?',
    answer: 'For most massage treatments, comfortable, loose-fitting clothing is recommended. Your therapist will provide appropriate draping during the session, and you may choose to disrobe to your level of comfort. We prioritize your privacy and comfort throughout the entire experience.'
  },
  {
    id: 3,
    question: 'How early should I arrive for my massage appointment?',
    answer: 'We recommend arriving 10-15 minutes before your scheduled appointment time. This allows you to relax, complete any necessary paperwork, and begin your massage experience without feeling rushed.'
  },
  {
    id: 4,
    question: 'What is your cancellation policy?',
    answer: 'We request at least 24 hours\' notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. We understand that life happens—please contact us if you need to make changes.'
  },
  {
    id: 5,
    question: 'Are your massage services suitable for pregnant women?',
    answer: 'Yes! We offer specialized prenatal massage treatments designed specifically for expecting mothers to relieve the discomforts of pregnancy and promote relaxation. Please inform us of your pregnancy when booking so we can ensure appropriate timing and positioning. We recommend waiting until the second trimester for massage services.'
  },
  {
    id: 6,
    question: 'Do you offer gift certificates for massage therapy?',
    answer: 'Absolutely! Gift certificates are available for any dollar amount or specific massage service. They make perfect gifts for birthdays, anniversaries, or just because. Gift certificates can be purchased in-store or over the phone.'
  },
  {
    id: 7,
    question: 'What is your refund policy?',
    answer: 'We want you to be completely satisfied with your massage experience. If you have concerns about any treatment, please speak with your therapist or our management team immediately. We stand behind our services and will work to make things right.'
  },
  {
    id: 8,
    question: 'Do you offer corporate or group massage packages?',
    answer: 'Yes, we work with businesses and organizations to provide chair massages for events, team-building experiences, and corporate wellness programs. Contact us to discuss options for your group.'
  }
]

export const getFaqById = (id) => {
  return faqs.find(faq => faq.id === id)
}
