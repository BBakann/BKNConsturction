import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/src/assets/bknlogo.png" alt="BKN Global Yapı İnşaat" className="logo-image" />
            <h2>BKN Global Yapı İnşaat</h2>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>Hakkımızda</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Hizmetler</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projeler</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>İletişim</Link></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '☀' : '☾'}
          </button>
          
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
