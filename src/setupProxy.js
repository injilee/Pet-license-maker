const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/cloudinary',
    createProxyMiddleware({
      target: 'https://api.cloudinary.com',
      pathRewrite: {
        '^/cloudinary': '',
      },
      changeOrigin: true,
    }),
  );
};
