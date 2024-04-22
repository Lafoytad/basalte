import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import BasalteHome from "./Components/BasalteHome/BasalteHome";

function App() {
    return (
        <div>
            <Nav />
            <Route path="/BasalteHome" Component={BasalteHome} />
        </div>
    );
}

export default App;
