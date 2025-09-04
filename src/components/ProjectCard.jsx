import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ imageUrl, title, subtitle, description, stats, completed = true, onClick }) => {
  return (
    <button className="project-card" onClick={onClick} type="button">
      <div className="project-image-wrap">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-image-overlay" />
        <div className="project-chip">BKN Global</div>
        {completed && <div className="project-badge">Tamamlandı</div>}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        {subtitle && <p className="project-subtitle">{subtitle}</p>}
        {description && <p className="project-desc">{description}</p>}
        {Array.isArray(stats) && stats.length > 0 && (
          <ul className="project-stats">
            {stats.map((item, idx) => (
              <li key={idx}>
                <span className="stat-label">{item.label}</span>
                <span className="stat-value">{item.value}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </button>
  )
}

export default ProjectCard


