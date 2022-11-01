import React from 'react';
import ReactDOM from 'react-dom/client';
import {OWNER_NAME} from "./Config";
import Routing from "./Routing";
import {RecoilRoot} from 'recoil';


export default function App() {
    return <>
        <RecoilRoot>
            <Routing/>
        </RecoilRoot>
    </>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

document.title = OWNER_NAME

root.render(
    // <React.StrictMode>
    <App/>
    // </React.StrictMode>
);

