const fs = require("fs/promises");
const path = require("path");
const CleanCSS = require("clean-css");
const terser = require("terser");
const { exec } = require('child_process');


module.exports = async function () {
  // MINIFYING CSS AND JS FILES
  await fs
    .readFile(path.resolve(__dirname, "../assets/css/main.css"))
    .then((data) => {
      let minifiedCSS = new CleanCSS().minify(data).styles
      fs.writeFile('_src/assets/css/main.min.css', minifiedCSS, (err) => {
        console.log(err);
      })
    });

  let data = await fs.readFile(path.resolve(__dirname, "../assets/js/bundle.js"), 'utf-8');
  let minifiedJS = await terser.minify(data);
  fs.writeFile('_src/assets/js/bundle.min.js', minifiedJS.code, (err) => {
    console.log(err);
  });

  return {
    environment: process.env.ENVIRONMENT || "development",
    cssPath: process.env.ENVIRONMENT === 'production' ? '/assets/css/main.min.css' : '/assets/css/main.css',
    jsPath: process.env.ENVIRONMENT === 'production' ? '/assets/css/bundle.min.js' : '/assets/js/bundle.js',
    "title": "Coastlight Digital",
    "Description": "The marketing website of the digital agency Coastlight Digital."
  };
};