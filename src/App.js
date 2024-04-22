import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import BasalteHome from "./Components/BasalteHome/BasalteHome";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/BasalteHome">
                    <BasalteHome />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
