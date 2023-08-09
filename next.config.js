/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  basePath: '/startupz',
  output: 'export',
}

module.exports = nextConfig

module.exports = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};