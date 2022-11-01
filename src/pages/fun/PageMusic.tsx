// eslint-disable-next-line @typescript-eslint/no-unused-vars

import ReactMarkdown from "react-markdown";

import MUSIC_LIST from '../../data/file/musicList.jsx'

const PageMusic = () => {

    return <>
        <h1>music</h1>
        <div>TODO: Make this like book reviews page...</div>
        <ReactMarkdown>
            {MUSIC_LIST}
        </ReactMarkdown>
    </>;
}

export default PageMusic

