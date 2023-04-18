/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig