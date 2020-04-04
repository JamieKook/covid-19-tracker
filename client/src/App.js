import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestForm from "./pages/TestForm";
import Nav from "./components/Nav";
import Map from "./pages/Map"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path={["/", "/map"]}>
            <Map />
          </Route> */}
          {/* <Route exact path="/users/:id">
            <User />
          </Route> */}
          <Route exact path={["/TestForm"]}>
            <TestForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
