import './Container.css'

const Container = ({ 
  children, 
  size = 'md', 
  className = '', 
  as: Component = 'div',
  ...props 
}) => {
  const classNames = `container container-${size} ${className}`.trim()
  const Tag = Component
  
  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  )
}

export default Container