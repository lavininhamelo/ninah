/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
    unoptimized: true,
  },
};

// The folders containing files importing twin.macro
const includedDirs = [
  path.resolve(__dirname, "components"),
  path.resolve(__dirname, "pages"),
  path.resolve(__dirname, "styles"),
];


module.exports = {
  ...nextConfig,
  webpack(config, options) {
    const { dev, isServer } = options;
    
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.(tsx|ts)$/,
      include: includedDirs,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "babel-loader",
          options: {
            sourceMaps: dev,
            plugins: [
              require.resolve("babel-plugin-macros"),
              [require.resolve("babel-plugin-styled-components"), { ssr: true, displayName: true }],
              [require.resolve("@babel/plugin-syntax-typescript"), { isTSX: true }],
            ],
          },
        },
      ],
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        module: false,
        path: false,
        os: false,
        crypto: false,
      };
    }

    if (typeof nextConfig.webpack === "function") {
      return nextConfig.webpack(config, options);
    } else {
      return config;
    }
  },
};
