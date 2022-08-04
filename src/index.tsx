import React from 'react';
import ReactDOM from 'react-dom/client';
import {OWNER_NAME} from "./Config";
import Routing from "./Routing";


export default function App() {
    return <>
        <Routing/>
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

