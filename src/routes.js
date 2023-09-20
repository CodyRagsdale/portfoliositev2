import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import HomePage from './components/home-page/home-page';
import About from './components/about-page/about-page';
import Contact from './components/contact-page/contact-page';
import Projects from './components/projects/index.jsx';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="aboutme" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default MyRoutes;
