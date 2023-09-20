import React from 'react';
import './projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="project-card animate__animated animate__fadeIn"
      onClick={onClick}
    >
      {project.imageUrl ? (
        <img src={project.imageUrl} alt={project.title} />
      ) : null}
      <div className="project-card-content animate__animated animate__slideInUp">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLink} /> Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
