 
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.plugins.push(new BundleAnalyzerPlugin({
  //       analyzerMode: 'static',
  //       reportFilename: 'report.html',
  //     }));
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;