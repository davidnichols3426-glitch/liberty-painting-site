# Liberty Painting Specialists website

Hosted on Netlify. Plain HTML pages plus an Eleventy-built blog with a
Decap CMS editor at https://www.libertypaintingnwa.net/admin

## Posting (no code)
1. Go to /admin and click "Login with GitHub".
2. Blog Posts > New Blog Post. Fill in the fields, add photos, click Publish.
3. The site updates in about a minute.

## Where things live
- *.html (root) ........ existing pages, copied as-is
- assets/ .............. images; editor uploads go to assets/uploads/
- blog/posts/*.md ...... blog posts (one file each)
- blog.njk ............. blog listing page (builds blog.html)
- _includes/ ........... page layouts for the blog
- sitemap.njk .......... builds sitemap.xml (blog posts added automatically)
- admin/ ............... editor settings
- _redirects ........... old Wix URL redirects

The four older articles are saved as hidden drafts with only their summary.
Paste the full text into each one, switch "Published" on, then point its old
/post/... line in _redirects at the new /blog/<slug>/ page.
