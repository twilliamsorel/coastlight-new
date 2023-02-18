const fs = require("fs/promises");
const path = require("path");
const CleanCSS = require("clean-css");

module.exports = function() {
  async () => {
    await fs
      .readFile(path.resolve(__dirname, "../assets/css/main.css"))
      .then((data) => { 
        let minifiedCSS = new CleanCSS().minify(data).styles
        fs.writeFile('_src/assets/css/main.min.css', minifiedCSS, (err) => {
          console.log(err);
        })
      })
  };

  return {
    environment: process.env.ENVIRONMENT || "development",
    cssPath: process.env.ENVIRONMENT === 'production' ? '/assets/css/main.min.css' : '/assets/css/main.css',
    "title": "Coastlight Digital",
    "Description": "The marketing website of the digital agency Coastlight Digital."
  };
};