import { useState } from "react";
import "./App.css";
import "./css/general.css";
import NavComponent from "./components/NavComponent";
import TodoList from "./components/Todo";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Player from "./pages/Player";
import Quest from "./pages/Quest";
import Intermediate from "./pages/intermediate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Welcome} path="/welcome" exact />
        <Route Component={Login} path="/login" exact />
        <Route Component={Player} path="/" exact />
        <Route Component={Intermediate} path="/authenticating" exact />
      </Routes>
    </Router>
  );
}

export default App;
