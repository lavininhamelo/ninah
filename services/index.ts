import { prisma } from "../prisma/db";

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    include: {
      tags: true,
    },
    orderBy: {
      createdAt: "desc",
    },
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
  if (!tagSlug) throw new Error("Tag slug is required");

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
    },
  });
  return posts;
}

async function getPostsByCategory(categorySlug: string) {
  if (!categorySlug) throw new Error("Category slug is required");

  const posts = await prisma.post.findMany({
    where: {
      category: {
        slug: categorySlug,
      },
    },
    include: {
      tags: true,
    },
  });
  return posts;
}

async function getAllTags() {
  const tags = await prisma.tag.findMany();
  return tags;
}

async function subscribeEmail(email: string) {
  if (!email) throw new Error("Email is required");

  try {
    return await prisma.newsletter.create({
      data: {
        email,
      },
    });
  } catch (error) {
    const err = error as { code: string };
    if (err.code === "P2002") {
      return true;
    }

    throw error;
  }
}

export { getAllPosts, getPostBySlug, getPostsByTag, getPostsByCategory, getAllTags, subscribeEmail };
