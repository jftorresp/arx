import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import First from "../pages/First";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={First} />
        <Route exact path='/First' component={First} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
