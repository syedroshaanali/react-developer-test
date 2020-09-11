import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MainScreen from "./MainScreen";
import ModalComp from "./components/ModalComp";

function RoutesMain() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/modalA" component={ModalComp} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route>{"404"}</Route>
      </Switch>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default RoutesMain;
