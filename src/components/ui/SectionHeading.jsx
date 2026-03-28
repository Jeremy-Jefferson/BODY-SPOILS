import './SectionHeading.css'

const SectionHeading = ({ 
  title, 
  subtitle,
  alignment = 'center',
  className = '',
  as: Component = 'h2',
  ...props
}) => {
  const classNames = `section-heading section-heading-${alignment} ${className}`.trim()
  const Tag = Component
  
  return (
    <div className={classNames} {...props}>
      {subtitle && <span className="section-heading__subtitle">{subtitle}</span>}
      <Tag className="section-heading__title">{title}</Tag>
    </div>
  )
}

export default SectionHeading