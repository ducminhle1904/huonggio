/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.unsplash.com", "technext.github.io", "i.ibb.co", "fakestoreapi.com"],
    },
    productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
