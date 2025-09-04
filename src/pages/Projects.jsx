import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import './Projects.css'
import homeImage from '../assets/homecontent.jpg'
import contactImage from '../assets/contactcontent.jpg'
import bakantowerImage from '../assets/bakantower.jpg'
import baglicaImage from '../assets/baglica.jpg'
import baglica2 from '../assets/baglica2.jpg'
import baglica3 from '../assets/baglica3.jpg'
import baglica4 from '../assets/baglica4.jpg'
import otel2 from '../assets/otel2.jpg'
import otel3 from '../assets/otel3.jpg'
import otel4 from '../assets/otel4.jpg'
import otel5 from '../assets/otel5.jpg'
import otel6 from '../assets/otel6.jpg'
import otel7 from '../assets/otel7.jpg'
import otel8 from '../assets/otel8.jpg'
import otel9 from '../assets/otel9.jpg'
import cakirlar1 from '../assets/cakirlar1.png'
import cakirlar2 from '../assets/cakirlar2.png'
import cakirlar3 from '../assets/cakirlar3.jpg'
import cakirlar4 from '../assets/cakirlar4.jpg'
import incek from '../assets/incek.jpg'
import incek1 from '../assets/incek1.jpg'
import incek2 from '../assets/incek2.jpg'
import incek3 from '../assets/incek3.jpg'
import incekVideo from '../assets/incek.mp4'
import eskisehirVideo from '../assets/eskisehiryolu.mp4'
const projectsHeroImage = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80'

const projects = [
  {
    id: 'bakan-tower',
    title: 'Bakan Tower',
    subtitle: '152 Dairelik Modern Yaşam Projesi',
    units: 152,
    image: bakantowerImage,
    gallery: [cakirlar1, cakirlar2, cakirlar3, cakirlar4],
    stats: [
      { label: 'Tip', value: '1+1 / 2+1 / 3+1' },
      { label: 'Durum', value: 'Planlama' },
    ],
    description: 'Şehrin merkezinde yükselen, modern mimari ile geniş sosyal alanları birleştiren prestijli bir yaşam projesi. Akıllı bina altyapısı, yeraltı otoparkı, peyzaj alanları ve fitness/stüdyo gibi sosyal donatılarla yaşam kalitesini artırmayı hedefler. Sürdürülebilir malzeme seçimi ve enerji verimliliği ön plandadır.',
    completed: true,
  },
  {
    id: 'karadag-otel',
    title: 'Karadağ Otel Projemiz',
    subtitle: 'Konfor ve Şıklık',
    image: homeImage,
    gallery: [otel2, otel3, otel4, otel5, otel6, otel7, otel8, otel9],
    stats: [
      { label: 'Kategori', value: 'Otel' },
      { label: 'Durum', value: 'Geliştirme' },
    ],
    description: 'Konfor, zarafet ve fonksiyonelliği bir araya getiren, misafir memnuniyetini odak alan otel projesi. Geniş lobi ve lounge alanları, çok amaçlı toplantı salonları, spa & wellness ve fine-dining restoranlarıyla 7/24 deneyim sunar. Operasyon verimliliği için back-of-house akışı optimize edilmiştir.',
    completed: true,
  },
  {
    id: 'eskisehir-yolu',
    title: 'Eskişehir Yolu 2+1',
    subtitle: '125 Dairelik Yaşam Alanı',
    units: 125,
    image: contactImage,
    gallery: [eskisehirVideo, contactImage],
    stats: [
      { label: 'Daire Tipi', value: '2+1' },
      { label: 'Durum', value: 'Planlama' },
    ],
    description: 'Ulaşım akslarının merkezinde, akılcı planlanmış 2+1 dairelerden oluşan modern konut projesi. Güneş alan cephe kurgusu, depolama çözümleri, yerden ısıtma altyapısı ve fonksiyonel mutfak tasarımlarıyla günlük yaşamı kolaylaştırır. Çocuk oyun alanı ve açık spor sahaları bulunur.',
    completed: true,
  },
  {
    id: 'baglica',
    title: 'Bağlıca 3+1',
    subtitle: '80 Dairelik Aile Yaşamı',
    units: 80,
    image: baglicaImage,
    gallery: [baglicaImage, baglica2, baglica3, baglica4],
    stats: [
      { label: 'Daire Tipi', value: '3+1' },
      { label: 'Durum', value: 'Planlama' },
    ],
    description: 'Aileler için ferah yaşam alanları sunan, 3+1 daire konseptinde sakin bir site. Geniş balkonlar, ebeveyn banyosu, site içi yürüyüş yolları ve kontrollü güvenlik sistemiyle huzurlu bir yaşam sağlar. Komşuluk kültürünü destekleyen yarı açık sosyal alanlar bulunur.',
    completed: true,
  },
  {
    id: 'incek',
    title: 'İncek Konutları',
    subtitle: '36 Dairelik 1+1 ve 3+1',
    units: 36,
    image: incek,
    gallery: [incekVideo, incek, incek1, incek2, incek3],
    stats: [
      { label: 'Daire Tipi', value: '1+1 & 3+1' },
      { label: 'Durum', value: 'Planlama' },
    ],
    description: 'İncek bölgesinin seçkin lokasyonunda, 1+1 ve 3+1 seçenekleriyle butik bir yaşam deneyimi. Mimari kurguda doğal ışık, iç-dış süreklilik ve sessiz cepheler önceliklendirilmiştir. Otopark, misafir otoparkı, bisiklet parkı ve depolama alanlarıyla tamamlanır.',
    completed: true,
  },
]

const Projects = () => {
  const [selected, setSelected] = useState(null)
  const handleOpen = (project) => setSelected(project)
  const handleClose = () => setSelected(null)

  return (
    <section className="projects-section">
      <div className="projects-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${projectsHeroImage})` }}>
        <div className="projects-hero-content">
          <h1>Projelerimiz</h1>
          <p>Modern mimari, yüksek kalite ve konforu bir araya getiren projelerimiz.</p>
        </div>
      </div>
      <div className="container">
        <div className="projects-grid">
          {projects.map(p => (
            <ProjectCard
              key={p.id}
              imageUrl={p.image}
              title={p.title}
              subtitle={p.subtitle}
              stats={p.stats}
              completed={p.completed}
              onClick={() => handleOpen(p)}
            />
          ))}
        </div>
        <ProjectModal isOpen={!!selected} onClose={handleClose} project={selected} />
      </div>
    </section>
  )
}

export default Projects


