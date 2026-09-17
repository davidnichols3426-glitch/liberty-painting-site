// Eleventy builds the blog. Every other page is plain HTML copied as-is.
module.exports = function (eleventyConfig) {
  // Existing hand-built pages and files, copied untouched
  eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Blog posts, oldest first (the blog page reverses this)
  eleventyConfig.addCollection("posts", (api) =>
    api
      .getFilteredByGlob("blog/posts/*.md")
      .filter((p) => p.data.published !== false)
      .sort((a, b) => a.date - b.date)
  );

  // Portfolio projects, oldest first (the portfolio page reverses this)
  eleventyConfig.addCollection("projects", (api) =>
    api
      .getFilteredByGlob("portfolio/projects/*.md")
      .filter((p) => p.data.published !== false)
      .sort((a, b) => a.date - b.date)
  );

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  eleventyConfig.addFilter("shortDate", (d) => {
    const x = new Date(d);
    return `${months[x.getUTCMonth()]} ${x.getUTCDate()}, ${x.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));

  return {
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: false,
  };
};
