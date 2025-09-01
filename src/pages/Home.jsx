import React from 'react'
import './Home.css'

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
      
      <section className="services">
        <h2>Hizmetlerimiz</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop" alt="Konut Projeleri" />
            </div>
            <h3>Konut Projeleri</h3>
            <p>Modern ve konforlu yaşam alanları</p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop" alt="Ticari Projeler" />
            </div>
            <h3>Ticari Projeler</h3>
            <p>İş merkezleri ve ofis binaları</p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop" alt="Emlak Projeleri" />
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
