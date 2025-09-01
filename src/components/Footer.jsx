import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BKN Global Yapı İnşaat</h3>
          <p>Kaliteli inşaat projeleri ile geleceği inşa ediyoruz.</p>
        </div>
        
        <div className="footer-section">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/about">Hakkımızda</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>İletişim Bilgileri</h4>
          <p>📧 info@bknglobal.com</p>
          <p>📞 +90 212 555 0123</p>
          <p>📍 İstanbul, Türkiye</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 BKN Global Yapı İnşaat. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer
