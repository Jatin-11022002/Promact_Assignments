import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styling/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `sidebar-menu-link ${isActive ? "active-menu-link" : ""}`;
            }}
          >
            <span className="sidebar-menu-icon">🏠</span>
            <span className="sidebar-menu-text">Home</span>
          </NavLink>
        </li>
        <li className="sidebar-menu-item">
          <NavLink
            to="/add"
            className={({ isActive }) => {
              return `sidebar-menu-link ${isActive ? "active-menu-link" : ""}`;
            }}
          >
            <span className="sidebar-menu-icon">👨‍💼</span>
            <span className="sidebar-menu-text">Add Employee</span>
          </NavLink>
        </li>
        <li className="sidebar-menu-item">
          <NavLink
            to="/list"
            className={({ isActive }) => {
              return `sidebar-menu-link ${isActive ? "active-menu-link" : ""}`;
            }}
          >
            <span className="sidebar-menu-icon">📃</span>
            <span className="sidebar-menu-text">All Employees</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
