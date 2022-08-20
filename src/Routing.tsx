import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import PageHome from "./pages/PageHome";
import PageBlog from "./pages/PageBlog";
import PageContact from "./pages/PageContact";
import PageAbout from "./pages/PageAbout";
import GithubApp from "./pages/demoApps/GithubApp";
import PageBooks from "./pages/hobbies/PageBooks";
import React from "react";
import PageMusic from "./pages/hobbies/PageMusic";
import PageVideogames from "./pages/hobbies/PageVideogames";
import PageResume from "./pages/PageResume";
import Certifications from "./pages/Certifications";
import {FourOhFourNotFound} from "./component/tidbits/FourOhFourNotFound";

function NoPage() {
    return <div>nopage!</div>;
}

export default function Routing() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"}
                   element={<Layout/>}> {/* TODO why is this needed? */}

                <Route index
                       element={<PageHome/>}/>

                <Route path={"*"} //match all routes - for http 404
                       element={<FourOhFourNotFound/>}/>

                <Route path={"blog"}
                       element={<PageBlog/>}/>

                <Route path={"contact"}
                       element={<PageContact/>}/>

                <Route path={"about"}
                       element={<PageAbout/>}/>

                <Route path={"work/resume"}
                       element={<PageResume/>}/>

                <Route path={"work/certifications"}
                       element={<Certifications/>}/>

                <Route path={"demoApps/githubApp"}
                       element={<GithubApp/>}/>

                <Route path={"hobbies/books"}
                       element={<PageBooks/>}/>

                <Route path={"hobbies/music"}
                       element={<PageMusic/>}/>

                <Route path={"hobbies/videogames"}
                       element={<PageVideogames/>}/>

                <Route
                    element={<NoPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
}
