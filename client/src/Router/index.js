import React from "react";
import { Routes, Route } from "react-router-dom"

//pages
import App from "../pages/Homepage"
import PlayerListPage from "../pages/PlayerListPage";
import SwaggerPage from "../pages/SwaggerPage";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={App}/>
            <Route path="/list" Component={PlayerListPage}/>
            <Route path="/docs" Component={SwaggerPage} />
        </Routes>
    )
}

export default Router