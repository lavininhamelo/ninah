import { prisma } from "../prisma/db";

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    include: {
      tags: true,
    },
    orderBy: {
        createdAt: 'desc'
    }
  });
  return posts;
}

async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug },
  });
  return post;
}

async function getPostsByTag(tagSlug: string) {
  const posts = await prisma.post.findMany({
    where: {
      tags: {
        some: {
          slug: tagSlug,
        },
      },
    },
    include: {
        tags: true,
    }
  });
  return posts;
}

async function getPostsByCategory(categorySlug: string) {
  const posts = await prisma.post.findMany({
    where: {
      category: {
        slug: categorySlug,
      },
    },
    include: {
        tags: true,
    }
  });
  return posts;
}

async function getAllTags() {
  const tags = await prisma.tag.findMany();
  return tags;
}

async function subscribeEmail(email: string) {
  const subscriber = await prisma.newsletter.create({
    data: {
      email,
    },
  });
  return subscriber;
}

export { getAllPosts, getPostBySlug, getPostsByTag, getPostsByCategory, getAllTags, subscribeEmail };
