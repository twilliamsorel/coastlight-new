module.exports = async function () {
  return {
    environment: process.env.ENVIRONMENT || "development",
    cssPath: process.env.ENVIRONMENT === 'production' ? '/assets/css/main-min.css' : '/assets/css/main.css',
    jsPath: process.env.ENVIRONMENT === 'production' ? '/assets/css/main-min.js' : '/assets/js/main.js',
    "title": "Coastlight Digital",
  };
};