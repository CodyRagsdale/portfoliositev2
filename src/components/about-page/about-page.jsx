import React, { useState } from 'react';

import './about-page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
  faMusic,
  faArrowRight,
  faArrowLeft,
  faCode,
  faPersonFalling,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [leftAnimateClass, setLeftAnimateClass] = useState('');
  const [rightAnimateClass, setRightAnimateClass] = useState('');

  const animateArrow = (direction) => {
    if (direction === 'left') {
      setLeftAnimateClass('');
    } else {
      setRightAnimateClass('');
    }

    // Let React re-render before proceeding
    setTimeout(() => {
      let element;
      if (direction === 'left') {
        element = document.querySelector('.left-nav-icon');
        if (element) {
          void element.offsetWidth;
          setLeftAnimateClass('animate__animated animate__bounce');
        }
      } else {
        element = document.querySelector('.right-nav-icon');
        if (element) {
          void element.offsetWidth;
          setRightAnimateClass('animate__animated animate__bounce');
        }
      }
    }, 0);
  };

  const sections = [
    {
      title: 'About Me',
      icon: faPersonFalling,
      content: `I'm on a mission to use code as a tool for positive change: tackling
                complex problems and making lives better, one project at a time.
                Whether it's crafting intuitive apps or optimizing behind-the-scenes
                processes, what excites me most is seeing my work turn into real-world
                solutions. Skilled in multiple frameworks, my ultimate goal remains
                constant: to build tech that genuinely matters.`,
    },
    {
      title: 'Skills',
      icon: faCode,
      content: `Technically, I'm proficient in HTML, CSS, SCSS, JavaScript, and a host of JS-based technologies
                like React, Angular, and others as you can see in my portfolio page. My strengths however extend beyond just my coding abilities. I'm a strong
                communicator that thrives in team settings, a quick learner, and approach every thing I'm involved in with integrity and conscientiousness. `,
    },
    {
      title: 'Interests',
      icon: faMusic,
      content: `Appreciator of the underappreciated. I'm a lover of music, cats, and
                both good and bad cinema. Avid spectator of Super Smash Bros. Melee.
                Often enjoying deckbuilders, strategy, CRPG's, and any number of the other kinds of games one spends more time thinking
                about than actually playing.`,
    },
    {
      title: 'Education',
      icon: faGraduationCap,
      content: `I don't have a traditional college degree, but I've recently completed
                a full-stack web development bootcamp through CareerFoundry. It's been
                a fast-paced and immersive experience that complements my years in the
                workforce.`,
    },
    {
      title: 'Work Experience',
      icon: faBriefcase,
      content: `My career has largely been spent in restaurant kitchens, where the
                pressure is constant and the stakes are high. This experience has
                given me a resilience and adaptability that I bring to every project
                in the tech space.`,
    },
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      animateArrow('right');
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      animateArrow('left');
      setCurrentSection(currentSection - 1);
    }
  };

  const { title, icon, content } = sections[currentSection];

  return (
    <div className="container about-page">
      <div className="about-section animate__animated animate__fadeIn">
        {icon && <FontAwesomeIcon icon={icon} className="section-icon" />}
        <h2>{title}</h2>
        <p className="animate__animated animate__slideInLeft">{content}</p>
        <div className="section-navigation animate__animated animate__bounce">
          {currentSection > 0 && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={`nav-icon left-nav-icon ${leftAnimateClass}`} // Updated this line
              onClick={prevSection}
            />
          )}
          {currentSection < sections.length - 1 && (
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`nav-icon right-nav-icon ${rightAnimateClass}`} // Updated this line
              onClick={nextSection}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
