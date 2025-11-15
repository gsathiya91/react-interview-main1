/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "ww2.innovatefinance.com",
    ],
  },
  trailingSlash: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=10, immutable",
          },
        ],
      },
    ];
  },

};
