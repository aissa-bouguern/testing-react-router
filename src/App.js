import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import AuthorPage from "./AuthorPage";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog/:slug" component={PostPage} />
        <Route path="/user/:slug" component={AuthorPage} />
      </Switch>
    </div>
  );
}
