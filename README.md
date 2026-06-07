# eivindhoydal.com

Personal website hosted on GitHub Pages at [eivindhoydal.com](https://eivindhoydal.com).

Plain HTML and CSS — no framework, no build step.

## Structure

```
index.html          Landing page
style.css           Shared stylesheet
writing/
  index.html        Writing index (Notes + Elsewhere)
  posts/            Drop new post files here
resources/
  index.html        Curated links and newsletters
CNAME               Custom domain config
```

## Adding a new post

1. Create a new HTML file in `writing/posts/`, e.g. `writing/posts/my-post.html`.
   Use the same `<link rel="stylesheet" href="../../style.css">` path and wrap content in `<main class="writing">`.

2. Add a link to it in `writing/index.html` under the **Notes** section:

```html
<li>
  <a class="title" href="posts/my-post.html">Post title</a>
  <span class="source">Month Year</span>
</li>
```

3. Commit and push — GitHub Pages deploys automatically.
