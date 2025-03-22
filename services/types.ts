import { Slug } from "data/posts";

export interface Post {
    slug: string;
    title: string;
    description?: string | null;
    subtitle?: string
    date: string;
    image?: string;
    content?: string
    related_posts?: Slug[]
    category?: string
    tags?: string[]
}