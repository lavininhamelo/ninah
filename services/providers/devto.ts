import axios from "axios"

const BASE_URL = process.env.BASE_URL
const instance = axios.create({ baseURL: BASE_URL })

async function getAllPostsByLocale() {
  const response: any = await instance.get("api/posts");
  const posts = response.data
  if (posts) {
    return posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      tags: post.tags || [],
      date: post.created_at,
      image: post.cover_image || post.social_image,
      description: post.description,
      content: post.body_html
    }))
  }
  return []
}

async function getPostBySlug(slug: string) {
  const response: any = await instance.get("api/posts/" + slug);
  const post = response.data
  if (post) {

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      tags: post.tags || [],
      date: post.created_at,
      image: post.cover_image || post.social_image,
      description: post.description,
      content: post.body_html
    }
  }

  return null
}


async function subscribeEmail(email: string): Promise<boolean> {
  return await true
}

const provider = { getAllPostsByLocale, getPostBySlug, subscribeEmail };

export default provider