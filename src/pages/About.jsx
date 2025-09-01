import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Hakkımızda</h1>
          <p>20 yılı aşkın deneyimimizle inşaat sektöründe öncü</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="about-container">
          <div className="about-text">
            <h2>BKN Global İnşaat</h2>
            <p>
              2003 yılında kurulan BKN Global İnşaat, Türkiye'nin önde gelen inşaat firmalarından biridir. 
              Müşteri memnuniyeti ve kalite odaklı yaklaşımımızla, her projede mükemmelliği hedefliyoruz.
            </p>
            <p>
              Konut, ticari ve altyapı projelerinde uzmanlaşmış ekibimiz, modern teknolojileri kullanarak 
              sürdürülebilir ve yenilikçi çözümler üretiyor.
            </p>
          </div>
          
          <div className="about-image">
            <img src="/src/assets/aboutcontent.jpg" alt="BKN Global Yapı İnşaat" />
          </div>
        </div>
        
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-icon">🏗️</div>
            <h3>500+</h3>
            <p>Tamamlanan Proje</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⏰</div>
            <h3>20+</h3>
            <p>Yıllık Deneyim</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">😊</div>
            <h3>1000+</h3>
            <p>Mutlu Müşteri</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <h3>50+</h3>
            <p>Uzman Ekip</p>
          </div>
        </div>
      </section>
      
      <section className="values">
        <div className="values-container">
          <h2>Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Kalite</h3>
              <p>Her projede en yüksek kalite standartlarını sağlıyoruz.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Güvenilirlik</h3>
              <p>Müşterilerimizin güvenini kazanmak en büyük önceliğimiz.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>İnovasyon</h3>
              <p>Sürekli gelişim ve yenilikçi çözümler üretiyoruz.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sürdürülebilirlik</h3>
              <p>Çevre dostu ve sürdürülebilir projeler geliştiriyoruz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
