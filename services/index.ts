import devto from "./providers/devto"
import { AvailableLocales, PostConfig, posts } from "data/posts"
import { Post } from "./types"

type Service = {
  getPostsList: () => Post[]
  getAllPostsByLocale: (availableLocales: AvailableLocales) => Promise<Post[]>
  getPostBySlug: (slug: string, locale?: AvailableLocales) => Promise<Post | null>
  getPostsByTag?: (tag: string) => Promise<any>
  getPostsByCategory?: (category: string) => Promise<any>
  subscribeEmail?: (email: string) => Promise<any>
}

const getPostsList = (): Post[] => {
  return posts.map(post => ({
    slug: post.slug,
    tags: post.tags || [],
    category: post.category,
    related_pots: post.related_posts || [],
    title: post.slug,
    date: ""
  }))
}

const getAllPostsByLocale = async (availableLocales: AvailableLocales): Promise<Post[]> => {
  const allPosts: Post[] = []

  for (let post of posts) {
    const meta = post.meta[availableLocales]

    if (meta.origin === "devto") {
      const postData = await devto.getPostBySlug(meta.origin_key)
      allPosts.push({
        slug: post.slug,
        title: meta.title || postData?.title,
        description: meta.description || postData?.description,
        subtitle: meta?.subtitle || "",
        related_posts: post.related_posts || [],
        image: meta.image === false ? undefined : postData?.image,
        date: post.date || postData?.date,
        tags: post?.tags || [],
        category: post?.category,
        content: postData?.content
      })
    } else if (meta.origin === "md") {
      allPosts.push({
        slug: post.slug,
        title: meta.title,
        description: meta.description,
        subtitle: meta?.subtitle || "",
        related_posts: post.related_posts || [],
        date: post.date || "",
        tags: post?.tags || [],
        category: post?.category,
        content: "#abc"
      })
    }

  }

  return allPosts
}

const getPostBySlug = async (slug: string, locale: AvailableLocales = "en") => {

  let post: PostConfig = posts.filter(post => post.slug === slug)[0]

  if (!post) {
    return null
  }

  const meta = post.meta[locale]

  if (meta.origin === "devto") {
    const postData = await devto.getPostBySlug(meta.origin_key)
    return {
      slug: post.slug,
      title: meta.title || postData?.title,
      description: meta.description || postData?.description,
      subtitle: meta?.subtitle || "",
      related_posts: post.related_posts || [],
      image: meta.image === false ? undefined : postData?.image,
      date: post.date || postData?.date,
      tags: post?.tags || [],
      category: post?.category,
      content: postData?.content
    }
  } else if (meta.origin === "md") {
    return {
      slug: post.slug,
      title: meta.title,
      description: meta.description,
      subtitle: meta?.subtitle || "",
      related_posts: post.related_posts || [],
      date: post.date || new Date().toLocaleString(),
      tags: post?.tags || [],
      category: post?.category,
      content: "#abc"
    }
  } else {
    return null
  }
}


function service(): Service {
  return {
    getAllPostsByLocale,
    getPostBySlug,
    getPostsList,
  }
}

export default service()