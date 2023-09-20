import { Outlet } from 'react-router-dom';

import './layout.scss';
import NavigationBar from '../navigation-bar/navigation-bar';
import SocialsFooter from '../socials-footer/socials-footer';

const Layout = () => {
  return (
    <div className="App">
      <NavigationBar />
      <div className="page">
        <Outlet />
      </div>
      <SocialsFooter />
    </div>
  );
};

export default Layout;
