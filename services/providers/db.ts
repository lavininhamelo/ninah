import { Post } from "services/types";
import { prisma } from "../../prisma/db";

async function getAllPostsByLocale(): Promise<Post[]> {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    if (!posts) {
        return []
    }

    return posts?.map(post => ({
        title: post.title,
        description: post.description,
        slug: post.slug,
        image: post?.imageUrl || undefined,
        date: post.createdAt.toISOString()
    })) || []
}

async function getPostBySlug(slug: string) {
    const post = await prisma.post.findUnique({
        where: { slug },
    });

    if (post) {
        return {
            title: post.title,
            description: post.description,
            date: post.createdAt.toISOString(),
            slug: post.slug,
            image: post.imageUrl,
        }
    }

    return null
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

    if (!posts) {
        return []
    }

    return posts?.map(post => ({
        title: post.title,
        description: post.description,
        date: post.createdAt.toISOString(),
        slug: post.slug,
        image: post.imageUrl,
    }))
}

async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
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

    if (posts) {
        return posts.map(post => ({
            title: post.title,
            description: post.description,
            date: post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
            slug: post.slug,
            image: post?.imageUrl || undefined,
        }))
    }

    return []
}

async function getAllTags() {
    const tags = await prisma.tag.findMany();
    return tags
}

async function subscribeEmail(email: string) {
    if (!email) throw new Error("Email is required");

    try {
        const data = await prisma.newsletter.create({
            data: {
                email,
            },
        });

        if (data) {
            return true
        }
    } catch (error) {
        const err = error as { code: string };
        if (err.code === "P2002") {
            return true;
        }

        throw error;
    }
}

const provider = { getAllPostsByLocale, getPostBySlug, getPostsByTag, getPostsByCategory, getAllTags, subscribeEmail };

export default provider