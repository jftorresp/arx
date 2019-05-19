import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import First from "../pages/First";
import Second from "../pages/Second";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={First} />
        <Route exact path="/First" component={First} />
        <Route exact path="/First/Second" component={Second} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
