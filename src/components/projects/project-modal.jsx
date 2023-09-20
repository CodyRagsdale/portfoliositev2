import React from 'react';
import './projects.scss';

const ProjectModal = ({ project, onClose }) => {
  const closeModalOnClickOutside = (event) => {
    if (event.target.className === 'project-modal') {
      onClose();
    }
  };

  return (
    <div className="project-modal" onClick={closeModalOnClickOutside}>
      <div
        className={`project-modal-content ${
          project.videoUrl ? '' : 'large-modal'
        }`}
      >
        {project.videoUrl ? (
          <div className="video-container">
            <video controls width="100%">
              <source src={project.videoUrl} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} />
        ) : null}
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>
          <strong>Technologies Used:</strong> {project.technologies.join(', ')}
        </p>
        <div className="modal-links">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
