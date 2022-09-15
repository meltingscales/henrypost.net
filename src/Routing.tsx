import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import {FourOhFourNotFound} from "./component/tidbits/FourOhFourNotFound";
import PageHome from "./pages/PageHome";
import PageBlog from "./pages/PageBlog";
import PageContact from "./pages/PageContact";
import PageAbout from "./pages/PageAbout";
import GithubApp from "./pages/demoApps/GithubApp";
import PageBooks from "./pages/fun/PageBooks";
import PageMusic from "./pages/fun/PageMusic";
import PageVideogames from "./pages/fun/PageVideogames";
import PageResume from "./pages/work/PageResume";
import PageCertifications from "./pages/work/PageCertifications";
import {Cube} from "./pages/demoApps/Cube";
import PagePhotos from "./pages/fun/PagePhotos";
import PageWhyHireMe from "./pages/work/PageWhyHireMe";
import PageCoolLinks from "./pages/fun/PageCoolLinks";

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

                <Route path={"work/why-hire-me"}
                       element={<PageWhyHireMe/>}/>

                <Route path={"work/certifications"}
                       element={<PageCertifications/>}/>

                <Route path={"demoApps/githubApp"}
                       element={<GithubApp/>}/>

                <Route path={"demoApps/cube"}
                       element={<Cube/>}/>

                <Route path={"fun/photos"}
                       element={<PagePhotos/>}/>

                <Route path={"fun/books"}
                       element={<PageBooks/>}/>

                <Route path={"fun/music"}
                       element={<PageMusic/>}/>

                <Route path={"fun/videogames"}
                       element={<PageVideogames/>}/>

                <Route path={"fun/cool-links"}
                       element={<PageCoolLinks/>}/>

                <Route
                    element={<NoPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
}
