import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GithubApp from "./pages/demoApps/GithubApp";
import Books from "./pages/hobbies/Books";
import React from "react";

function NoPage() {
    return <div>nopage!</div>;
}

export default function Routing() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"}
                   element={<Layout/>}> {/* TODO why is this needed? */}

                <Route index
                       element={<Home/>}/>

                <Route path={"blog"}
                       element={<Blog/>}/>

                <Route path={"contact"}
                       element={<Contact/>}/>

                <Route path={"about"}
                       element={<About/>}/>

                <Route path={"demoApps/githubApp"}
                       element={<GithubApp/>}/>

                <Route path={"hobbies/books"}
                       element={<Books/>}/>

                <Route
                    element={<NoPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
}
