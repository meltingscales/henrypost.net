import {DataBoundClass} from "./DataBoundClass";
import {ReactNode} from "react";

export type MBlog = {}

export type MBlogPost = {
    date: Date,
    blogContent: string | ReactNode
    title: string
    tags: string[]
}

export class TBlog extends DataBoundClass<MBlog> {

}