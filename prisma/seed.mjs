import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const defaultData = [
  "react",
  "vue",
  "node",
  "javascript",
  "typescript",
  "nextjs",
  "graphql",
  "go",
  "web3",
  "software-engineering",
  "front-end",
  "back-end",
];
 
async function main() {
 const categories = defaultData.map((category) => ({ name: category, slug: category }))
  
 await prisma.category.createMany({
    data: categories
  }); 

  await prisma.post.create({
    data: {
      title: "Connecting a Metamask Wallet to a React App",
      slug: "connecting-metamask-wallet-react-app",
      imageUrl:
        "image",
      description: "A practical guide to connecting a Metamask wallet to a React app.",
      contentOrigin: "dev.to",
      contentReference: "none",
      category: {
        connect: {
          slug: "web3",
        },
      },
      tags: {
        create: [
          {
            name: "react",
            slug: "react",
          },
          {
            name: "web3",
            slug: "web3",
          },
          {
            name: "ethereum",
            slug: "ethereum",
          },
          {
            name: "blockchain",
            slug: "blockchain",
          },
          {
            name: "ethers",
            slug: "ethers",
          },
        ],
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Applying DDD on a Node.js REST API",
      slug: "applying-ddd-nodejs-rest-api",
      imageUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--NAZNQpKx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xgecfhliiu4c85k3kfh7.jpg",
      description: "A practical guide to applying Domain Driven Design on a Node.js REST API.",
      contentOrigin: "dev.to",
      contentReference: "none",
      category: {
        connect: {
          slug: "back-end",
        },
      },
      tags: {
        create: [
          {
            name: "node",
            slug: "node",
          },
          {
            name: "api",
            slug: "api",
          },
          {
            name: "ddd",
            slug: "ddd",
          },
        ],
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Dark Mode Using Tailwind CSS the Best Way",
      slug: "tailwind-css-dark-mode",
      imageUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--NAZNQpKx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xgecfhliiu4c85k3kfh7.jpg",
      description:
        "Dark mode is a must-have feature for every modern website. It is easy to implement using Tailwind CSS.",
      contentOrigin: "dev.to",
      contentReference: "none",
      createdAt: "2022-01-01T00:00:00.000Z",
      category: {
        connect: {
          slug: "front-end",
        },
      },
      tags: {
        create: [
          {
            name: "tailwind",
            slug: "tailwind",
          },
          {
            name: "react-js",
            slug: "react-js",
          },
          {
            name: "css",
            slug: "css",
          },
        ],
      },
    },
    
  });
}

main()
  .then(async () => {
    console.log("Seeding completed.");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
