import React  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ArticlesListPage from "./components/ArticlesListPage";
import ArticlePage from "./components/ArticlePage";
import NavBar from "./components/NavBar";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesListPage} />
          <Route path="/article/:name" component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
