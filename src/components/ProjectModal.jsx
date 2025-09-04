import React, { useEffect } from 'react'
import './ProjectModal.css'

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Kapat">✕</button>
        <div className="modal-media">
          <Gallery images={project.gallery && project.gallery.length ? project.gallery : [project.image]} altTitle={project.title} />
          {project.completed && <span className="modal-badge">Tamamlandı</span>}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

const Gallery = ({ images, altTitle }) => {
  const [index, setIndex] = React.useState(0)
  const prev = () => setIndex((index - 1 + images.length) % images.length)
  const next = () => setIndex((index + 1) % images.length)

  return (
    <div className="gallery">
      {/\.mp4$/i.test(images[index]) ? (
        <video className="modal-cover" src={images[index]} controls playsInline controlsList="nodownload" preload="metadata" />
      ) : (
        <img className="modal-cover" src={images[index]} alt={`${altTitle} - ${index + 1}`} />
      )}
      {images.length > 1 && (
        <>
          <button type="button" className="g-arrow left" onClick={prev} aria-label="Önceki">‹</button>
          <button type="button" className="g-arrow right" onClick={next} aria-label="Sonraki">›</button>
          <div className="g-dots">
            {images.map((_, i) => (
              <button key={i} className={`g-dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} aria-label={`Görsel ${i+1}`}></button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}


