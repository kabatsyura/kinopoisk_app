import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="menu">
      <Link to="/">Главная</Link>
      <Link to="/about">О создателе</Link>
    </nav>
  );
};

export default Navigation;