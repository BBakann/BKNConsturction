import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import housingImg from '../assets/homecontent.jpg'
import ofisImg from '../assets/ofis.jpeg'
import ofis2Img from '../assets/ofis2.jpeg'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>BKN Global Yapı İnşaat</h1>
          <p>Kaliteli ve güvenilir inşaat projeleri</p>
          <button className="cta-button" onClick={() => navigate('/projects')}>Projelerimizi İnceleyin</button>
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
              <img src={ofisImg} alt="Ticari Projeler" />
            </div>
            <h3>Ticari Projeler</h3>
            <p>İş merkezleri ve ofis binaları</p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src={ofis2Img} alt="Emlak Projeleri" />
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
