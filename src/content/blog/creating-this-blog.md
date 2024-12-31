---
title: "Creating This Blog"
description: "A complete build log of my minimalist, statically generated, Astro blog"
pubDate: "30 Dec 2024"
# updatedDate: ""
# heroImage: ""
---

The impetus for creating this blog came from my desire to build a site using [Astro](https://astro.build/) and [Vue](https://vuejs.org/). My main goal was to gain more experience with different frameworks while having a platform to document my thoughts, share what I’ve learned, and talk about the things I’ve built along the way. By writing about these experiences, I hope to deepen my understanding of them and, hopefully, help others in the process. A secondary reason for starting this blog is that it gives me an easy way to share my ideas in long form across multiple platforms, opening the door for feedback and constructive criticism.

## Inspiration

The minimalist design and layout of the blog were inspired by [Lee Robinson's Site](https://leerob.com/). I then expanded on his minimalist approach and added a dark theme along with the ability to switch between light and dark themes and have the default theme match the user's preference. I also chose a color scheme for each mode that matches [my portfolio site](https://edward-vonschondorf.dev/) (at least in dark mode, I don't have a light mode yet on my portfolio at this time).

## Development

My blog uses the following:

- Astro v5 for static site generation
- Vue v3.5 for somce client-side interactions
- TailwindCSS v3.4 for CSS
  - Tailwind Typography for styling md/mdx files
- Lucide Vue Next v0.4 for icons

To start off development I went with the [Astro Starter Kit: Blog](https://github.com/withastro/astro/tree/latest/examples/blog) using the following command:

```
npm create astro@latest -- --template blog
```

I then proceeded to gut and re-arrange core parts of the template since it was set up with more pages than I needed. For example, it had a home page, about page, blog list page, and blog post page and all I needed was the home and blog post pages. Initially the `pages/` directory looked like this:

```
pages/
|__blog/
|  |__[...slug].astro
|  |__index.astro
|__about.astro
|__index.astro
|__rss.xml.js
```

...and now looks like this:

```
pages/
|__[...slug].astro
|__index.astro
|__rss.xml.js
```

I could have kept the `[...slug].astro` (a.k.a. the blog post page) in the blog directory, but I didn’t want my URLs for posts to look like this:

```
https://blog.edward-vonschondorf.dev/blog/blog-post-title-here
```

It felt redundant and didn't align with the minimalist design I was going for.

Once I got the structure figured out, I added Tailwind CSS and Vue and started working on the look of the site, implementing custom fonts (Poppins for the primary text and Geist Mono for code snippets), added the light and dark theme switching, implemented Astro's view transitions using the `<ClientRouter />`, tested the rss feed was operational, and that there was a link to it in the footer and a `<Link>` in the `<head>`. Finally, I added some subtle animations to anything that could be interacted with (i.e. links, my name, etc.).

### Challenges

Overall, there weren't too many issues I had to troubleshoot when implementing a new feature or refactoring an existing one. It mostly came down to my lack of experience with Astro and Vue that were the source of any problems that arose. That said, the theme switcher is still somewhat buggy in that when in dark mode, colors briefly flash to light mode if the user manually refreshes the page. Interestingly, when I implemented the `<ClientRouter />` view transitions it prevented the flash when changing pages issue I was having. I suspect a more complete solution would involve implementing the theme switcher with vanilla JavaScript and placing it in the `<head>` of the document so it executes before rendering. That's a problem for future me to solve as I continue to add features and refine the codebase.

The only other major challenge I ran into was how to style the markdown files efficiently. I had heard of the [Tailwind Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography) a while back and gave it a shot. While it did work quite well initially, I didn't like the default colors as it didn't match with the rest of my color scheme so I had to extensively modify it directly in my `tailwind.config.mjs`. I'm not entirely sure how I handled it was the best solution, but it is working so I'll leave it for now.

## Future Developments

The current plan is to at least write about every project I've deployed so far (about a dozen to date) and space the posts out at two per week. I'm looking forward to reviewing my old code and seeing how I could do better now or see where I'm still lacking in my understanding and how I can improve.

Other than that, I can see adding a more robust backend solution to keep all of my posts in order if the number of posts starts getting difficult to manage. If it isn't overkill I was looking into Drizzle and Postgre SQL as a solution.

Feel free to comment about this post on whatever platform you see it posted on as I am always looking forward to interactions with other developers of any level of skill/seniority.

-EV
