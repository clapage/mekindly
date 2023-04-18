/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};




module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@"] = __dirname + "/src";
    return config;
  },
};



module.exports = nextConfig
