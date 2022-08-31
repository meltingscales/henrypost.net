import {MBlog} from "../model/MBlog";
import HENRY_TBLOG_DATA from "../data/modelbound/blog_henryPost";

const PageBlog = () => {

    return <>
        <h1>Blog</h1>
        {/*<div>dear diary, today I went on a walk and had some coffee. it was really nice. I saw a slug</div>*/}

        {MBlog.renderBlog(HENRY_TBLOG_DATA())}

    </>;
}

export default PageBlog

