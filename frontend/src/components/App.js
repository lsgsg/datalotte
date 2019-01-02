import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Auth, NotFound, Lotte, Lotte2 } from "../pages";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/chart/lotte1" exact={true} component={Lotte} />
          <Route path="/chart/lotte2" exact={true} component={Lotte2} />
          <Route path="/chart/lotte3" exact={true} component={Lotte} />
          <Route path="/chart/lotte4" exact={true} component={Lotte} />
          <Route path="/chart/lotte5" exact={true} component={Lotte} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;
//<Route path="/chart/:kind" exact={true} component={Lotte} />
