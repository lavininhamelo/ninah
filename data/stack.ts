export type Stack = {
    name: string;
    imageSource: string;
    topics?: string[];
  };

export const techs: Stack[] = [
    {
      name: "Javascript",
      imageSource: "/icons/icon-javascript.svg",
      topics: [
        "Javascript",
        "ES6",
        "jQuery",
        "DOM Manipulation",
        "Fetch API",
        "JSON",
        "Webpack",
        "Babel",
        "Arrow Functions",
        "Promises",
        "Async/Await",
        "Closures",
        "TypeScript",
        "OO",
      ],
    },
    {
      name: "Node.js",
      imageSource: "/icons/icon-node.svg",
      topics: [
        "Node.js",
        "Express.js",
        "PM2",
        "REST API",
        "JWT",
        "Adonis.js",
        "Hapi.js",
        "Strams",
        "Sequelize",
        "Prisma",
        "TypeORM",
        "GraphQL",
        "Middlewares",
        "Jest",
        "Mocha",
        "Chai",
        "Supertest",
        "Nodemon",
        "NPM",
        "Yarn",
        "Yup",
        "Bcrypt",
        "Multer",
        "Nodemailer",
        "Handlebars",
        "Socket.io",
        "WebSockets",
        "Mongoose",
      ],
    },
    {
      name: "React",
      imageSource: "/icons/icon-react.svg",
      topics: [
        "React Hooks",
        "React Router",
        "Redux & (Saga & Thunk)",
        "Context API",
        "Styled Components",
        "Next.js",
        "Material UI",
        "Chakra UI",
        "Storybook",
        "Jest",
        "React Testing Library",
        "CSS-in-JS",
        "SSR",
        "SSG",
        "SEO",
      ],
    },
    {
      name: "Vue",
      imageSource: "/icons/icon-vue.svg",
      topics: [
        "Vue",
        "Axios",
        "GraphQL",
        "Quasar Framework",
        "Cordova",
        "Vue 3",
        "Vuex",
        "Vue Router",
        "Pinia",
        "Composition API",
        "Nuxt.js",
        "Vuetify",
        "Vue Test Utils",
        "Jest",
        "Vue Testing Library",
        "Cypress",
        "SCSS",
        "Storybook",
      ],
    },
    {
      name: "Typescript",
      imageSource: "/icons/icon-typescript.svg",
      topics: [
        "Typescript",
        "TypeScript with React",
        "TypeScript with Vue",
        "TypeScript with Node.js",
        "Generics",
        "Interfaces",
        "Type Aliases",
        "Enums",
        "Decorators",
        "Namespaces",
        "Modules",
        "Classes",
        "OO",
      ],
    },
    {
      name: "HTML",
      imageSource: "/icons/icon-html.svg",
      topics: ["HTML", "HTML5", "HTML Semantics", "SEO"],
    },
    {
      name: "CSS",
      imageSource: "/icons/icon-css.svg",
      topics: [
        "CSS",
        "CSS3",
        "CSS Grid",
        "CSS Flexbox",
        "BEM",
        "CSS Animations",
        "CSS Transitions",
        "CSS Media Queries",
        "Bootstrap",
        "Tailwind CSS",
        "SASS",
        "SCSS",
        "LESS",
      ],
    },
    {
      name: "GraphQL",
      imageSource: "/icons/icon-graphql.svg",
      topics: [
        "GraphQL",
        "Apollo Client",
        "Apollo Server",
        "TypeGraphQL",
        "GraphQL Playground",
        "Schemas",
        "Resolvers",
        "Queries",
        "Mutations",
        "Fragments",
      ],
    },
    {
      name: "PHP",
      imageSource: "/icons/icon-php.svg",
      topics: ["PHP", "Laravel", "Lumen", "Eloquent ORM", "Migrations", "Seeding", "Factories", "PHP Storm"],
    },
    {
      name: "Web 3",
      imageSource: "/icons/icon-web3.svg",
      topics: [
        "Ethereum",
        "Solidity",
        "Truffle",
        "Ganache",
        "Hardhat",
        "Metamask",
        "Web3.js",
        "Ethers.js",
        "Infura",
        "Alchemy",
        "IPFS",
        "Pinata",
        "ERC-20",
        "ERC-721",
        "ERC-1155",
        "Remix",
        "OpenZeppelin",
      ],
    },
  ];
  export const databases: Stack[] = [
    {
      name: "PostgreSQL",
      imageSource: "/icons/icon-postgressql.svg",
      topics: ["Queries", "Indexes", "Triggers", "Views", "Transactions", "ORM", "Modeling"],
    },
    {
      name: "MySQL",
      imageSource: "/icons/icon-mysql.svg",
    },
    {
      name: "MongoDB",
      imageSource: "/icons/icon-mongodb.svg",
      topics: ["Schema", "Documents", "Collections", "Indexes", "Aggregation", "Mongoose", "Indexing Otimization"],
    },
    {
      name: "Redis",
      imageSource: "/icons/icon-redis.svg",
      topics: ["Caching", "Pub/Sub", "Redis CLI", "Redis with Node.js", "Bulls", "Bee Queue"],
    },
  ];
  export const others: Stack[] = [
    {
      name: "GitHub",
      imageSource: "/icons/icon-github.svg",
      topics: ["GitHub", "Pull Requests", "Git Flow", "GitHub Actions", "GitLab CI/CD", "Git Hooks", "Git Issues"],
    },
    {
      name: "GitLab",
      imageSource: "/icons/icon-gitlab.svg",
    },
    {
      name: "Docker",
      imageSource: "/icons/icon-docker.svg",
    },
    {
      name: "Kubernetes",
      imageSource: "/icons/icon-kubernetes.svg",
    },
    {
      name: "Jira",
      imageSource: "/icons/icon-jira.svg",
    },
    {
      name: "Figma",
      imageSource: "/icons/icon-figma.svg",
    },
    {
      name: "Heroku",
      imageSource: "/icons/icon-heroku.svg",
    },
    {
      name: "AWS",
      imageSource: "/icons/icon-aws.svg",
    },
    {
      name: "NGINX",
      imageSource: "/icons/icon-nginx.svg",
    },
    {
      name: "Firebase",
      imageSource: "/icons/icon-firebase.svg",
    },
    {
        name: "RabbitMQ",
        imageSource: "/icons/icon-rabbitmq.svg",
    }
  ];