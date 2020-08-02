const filters = require('./filters');
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {

  // Add filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  // Add support for YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  eleventyConfig.addPassthroughCopy('src/assets/css/*.css');

  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  }
}