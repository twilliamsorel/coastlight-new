const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/assets");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strict_filters: true
  });

  return {
    dir: {
      input: "_src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  }
};