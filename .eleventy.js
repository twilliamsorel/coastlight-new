module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/assets");
  eleventyConfig.addPassthroughCopy("_src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("_src/favicon-16x16.png");

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