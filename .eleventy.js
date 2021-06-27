module.exports = function (eleventyConfig) {
  // Add related posts
  eleventyConfig.addLiquidShortcode(
    'related',
    (title, url) => `
  <a href="${url}" class="related">${title}</a>
  `
  );
};
