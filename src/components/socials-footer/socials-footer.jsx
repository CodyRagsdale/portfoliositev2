import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import './socials-footer.scss';

const SocialsFooter = () => {
  return (
    <div className="socials-footer">
      <ul className="socials-list">
        <li className="socials-logo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/CodyRagsdale"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="socials-logo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/cody-ragsdale-bb045625b/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="socials-logo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/CodyRags"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="socials-logo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@codyjguyragsdale"
          >
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialsFooter;
