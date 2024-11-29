import React from 'react';
import ThemeToggle from './ThemeToggle';
import RouteBar from '../core/route-bar.js'; 

const Layout = ({ children }) => (
  <>
    <div className="control-panel-header">
      <ThemeToggle />
      <RouteBar />
    </div>
    <main>
      {children}
    </main>
  </>
);

export { Layout };
export default Layout;