import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'animate.css';
import './contact-page.scss';
import InfoModal from './info-modal'; // Make sure to create and import this component as shown in the previous example

const ContactPage = () => {
  const [state, handleSubmit] = useForm('mqkvlyqg');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(true); // By default, the modal is shown
  const [isModalClosed, setIsModalClosed] = useState(false); // Track if modal is closed

  const afterSubmit = () => {
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (isModalClosed) {
      // You can initiate any actions here after the modal is closed
    }
  }, [isModalClosed]);

  return (
    <div className="contact-page">
      <InfoModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setIsModalClosed(true);
        }}
      />
      {isModalClosed && (
        <div className="animate__animated animate__fadeIn">
          <h1 className="animate__animated animate__bounceInDown">
            Contact Me
          </h1>
          {state.succeeded && formSubmitted ? (
            <p className="animate__animated animate__bounceInLeft">
              Thanks for your message! It was forwarded to my e-mail, and I will
              respond as soon as I'm able.
            </p>
          ) : (
            <form onSubmit={handleSubmit} onAnimationEnd={afterSubmit}>
              <div className="input-group animate__animated animate__slideInRight">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="input-group animate__animated animate__slideInRight">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="input-group animate__animated animate__slideInRight">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="flat-button animate__animated animate__pulse animate__infinite"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
