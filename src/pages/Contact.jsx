import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="hero-content">
          <h1>İletişim</h1>
          <p>Bizimle iletişime geçin, projelerinizi hayata geçirelim.</p>
        </div>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-details">
            <h2>İletişim Bilgileri</h2>
            
            <div className="contact-grid">
              <div className="contact-item">
                <h3>Adres</h3>
                <p>BAKAN TOWER</p>
                <p>Levent Mahallesi, Büyükdere Caddesi</p>
                <p>No: 185, Kat: 15, Daire: 1501</p>
                <p>Şişli / İstanbul</p>
              </div>
              
              <div className="contact-item">
                <h3>Telefon</h3>
                <p>+90 212 555 0123</p>
                <p>+90 532 555 0123</p>
              </div>
              
              <div className="contact-item">
                <h3>E-posta</h3>
                <p>info@bknglobal.com</p>
                <p>proje@bknglobal.com</p>
              </div>
              
              <div className="contact-item">
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 09:00 - 13:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="location-section">
          <h2>Konum</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=40.000543895373916,32.70095682662205&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BKN Global Konum"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
