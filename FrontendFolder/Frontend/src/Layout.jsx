import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Outlet /> {/* This is where the child routes will be rendered */}
    </div>
  );
};

export default Layout;
