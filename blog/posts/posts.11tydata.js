// Settings shared by every blog post the editor creates.
const SITE = "https://www.libertypaintingnwa.net";

module.exports = {
  layout: "post.njk",
  eleventyComputed: {
    // Posts with "Published" switched off in the editor are not built.
    permalink: (data) =>
      data.published === false ? false : `/blog/${data.page.fileSlug}/index.html`,
    eleventyExcludeFromCollections: (data) => data.published === false,
    schema: (data) =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.title,
        description: data.description,
        datePublished: new Date(data.page.date).toISOString(),
        image: data.image ? SITE + data.image : undefined,
        url: SITE + `/blog/${data.page.fileSlug}/`,
        author: { "@type": "Organization", name: "Liberty Painting Specialists" },
        publisher: { "@type": "Organization", name: "Liberty Painting Specialists" },
      }),
  },
};
