import React from "react";
import Sidebar from "./components/Sidebar";
import "./styling/layout.css";

function Layout({ component: Component }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        {Component ? (
          <Component />
        ) : (
          <div className="content-placeholder">
            <h1>Nothing to Display</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
