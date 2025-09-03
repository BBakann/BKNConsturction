import React from 'react'
import './Home.css'
import housingImg from '../assets/homecontent.jpg'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>BKN Global Yapı İnşaat</h1>
          <p>Kaliteli ve güvenilir inşaat projeleri</p>
          <button className="cta-button">Projelerimizi İnceleyin</button>
        </div>
      </section>
      
      <section className="about-blurb container">
        <h2>Neden BKN Global?</h2>
        <p>
          Tasarımdan anahtar teslimine, her adımı şeffaf ve ölçülebilir biçimde yönetir; bütçe, zaman ve kalite dengesini koruyan çözümler üretiriz.
        </p>
        <div className="about-features">
          <div className="about-feature">
            <h4>Planlı Süreç</h4>
            <p>Net takvim, düzenli raporlama ve sürprizsiz ilerleme.</p>
          </div>
          <div className="about-feature">
            <h4>Kaliteli Uygulama</h4>
            <p>Malzeme/işçilik standartları ve yerinde kalite kontrol.</p>
          </div>
          <div className="about-feature">
            <h4>Deneyimli Ekip</h4>
            <p>Disiplinler arası uzmanlıkla uçtan uca çözüm.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Hizmetlerimiz</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img src={housingImg} alt="Konut Projeleri" />
            </div>
            <h3>Konut Projeleri</h3>
            <p>Modern ve konforlu yaşam alanları</p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop" alt="Ticari Projeler" />
            </div>
            <h3>Ticari Projeler</h3>
            <p>İş merkezleri ve ofis binaları</p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&h=800&fit=crop" alt="Emlak Projeleri" />
            </div>
            <h3>Emlak Projeleri</h3>
            <p>Lüks villa ve rezidans projeleri</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
