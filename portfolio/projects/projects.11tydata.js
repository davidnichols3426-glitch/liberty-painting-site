// Settings shared by every portfolio project: each one gets its own photo page.
module.exports = {
  layout: "project.njk",
  eleventyComputed: {
    permalink: (data) =>
      data.published === false ? false : `/portfolio/${data.page.fileSlug}/index.html`,
    description: (data) =>
      data.details ||
      `${data.title}${data.location ? " in " + data.location : ""} by Liberty Painting Specialists, Northwest Arkansas painters.`,
  },
};
