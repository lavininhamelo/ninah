export type Slug = string
export type Origin = "database" | "devto" | "md"
export type AvailableLocales = "en" | "pt-BR"

export interface PostMeta {
    title: string;
    subtitle?: string;
    description?: string | null;
    image?: string | boolean 
    origin: Origin,
    origin_key: string,
}

export interface PostConfig {
    slug: Slug,
    tags?: string[]
    category?: string,
    related_posts?: Slug[]
    meta: Record<AvailableLocales, PostMeta>
    date?: string,
}

export const posts: PostConfig[] = [
   
]

