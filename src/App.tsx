import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { IssueList } from "./routes/IssueList";
import { IssueDetail } from "./routes/IssueDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IssueList />
          </Route>
          <Route path="/detail/:id">
            <IssueDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
