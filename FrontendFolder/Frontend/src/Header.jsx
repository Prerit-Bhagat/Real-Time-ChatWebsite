import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h2>Header Component</h2>
        {/* Add any navigation or header content here */}
      </header>
      <main>
        <Outlet /> {/* This will render the nested routes */}
      </main>
    </div>
  );
};

export default Header;
