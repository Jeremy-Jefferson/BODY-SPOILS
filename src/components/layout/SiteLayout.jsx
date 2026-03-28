import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './SiteLayout.css'

const SiteLayout = () => {
  return (
    <div className="site-layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout