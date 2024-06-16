import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/movie/:id" Component={Detail}/>
      </Routes>
    </HashRouter>
  );
}

export default App;