export type Project = {
  title: string;
  link: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "This Portfolio",
    link: "https://github.com/lavininhamelo/ninah",
    description: "This portfolio is being built by me using React.js, Typescript, Styled Components and Next.js.",
  },
  {
    title: "Minecraft Inventory using Vanilla JS",
    link: "https://codepen.io/lavininhamelo/full/NWxPKLJ",
    description: "It was a challenge to create a Minecraft Inventory using Vanilla JS only for funny purposes.",
  },

  {
    title: "API Challenge",
    link: "https://github.com/lavininhamelo/node-challenge",
    description:
      "It was a challenge to create an API using Node.js, Typescript, Express and MongoDB, API Swagger. That I did in 2 days for a job interview, and I got the job.",
  },

  {
    title: "Purple Butterfly",
    link: "https://github.com/lavininhamelo/purple-butterfly",
    description:
      "It's far from being finished, it's a fake social descentralized netowork that I'm working on to apply all the things that I know in one advanced project. Usign Blockchain, Microservices Architecture, Clean Architecture, SOLID, DDD, Design Patterns, Node.js, Typescript, React.js, etc",
  },
  {
    title: "DevPad",
    link: "https://github.com/lavininhamelo/devpad",
    description:
      "DevPad was a Project create to help developers to save their code snippets and share with the community, but the main motivation was teach a group of interns how to build a fullstack application using React, made by me and a Friend.",
  },
  {
    title: "DevPad Backend",
    link: "https://github.com/lavininhamelo/devpad-backend",
    description:
      "DevPad Backend that was made using Node.js, Javascript, Express, MongoDB, JWT, etc. Is the Backend of DevPad and also it was used for teach a group of interns metioned above.",
  },
];
