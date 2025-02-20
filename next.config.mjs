/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "https://img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "https://media.licdn.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blockchain-development-company",
        destination: "/service/core-blockchain-development",
        statusCode: 301,
      },
      {
        source: "/ai-development-company",
        destination: "/service/ai-chatbot-development",
        statusCode: 301,
      },
      {
        source: "/game-development-company",
        destination: "/service/unity-game-development",
        statusCode: 301,
      },
      {
        source: "/web-application-development",
        destination: "/service/web-application-development",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
