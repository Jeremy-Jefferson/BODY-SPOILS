import Container from '../ui/Container'
import Button from '../ui/Button'
import './PageHero.css'

const PageHero = ({ 
  title, 
  subtitle,
  background = 'default',
  actions = [],
  className = ''
}) => {
  return (
    <div className={`page-hero page-hero-${background} ${className}`}>
      <Container>
        <div className="page-hero-content">
          {subtitle && <span className="page-hero-subtitle">{subtitle}</span>}
          <h1 className="page-hero-title">{title}</h1>
          {actions.length > 0 && (
            <div className="page-hero-actions">
              {actions.map((action, index) => (
                <Button 
                  key={index}
                  to={action.to}
                  href={action.href}
                  variant={action.variant || 'primary'}
                  size={action.size || 'md'}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default PageHero