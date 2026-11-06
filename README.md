# saikatmondal.github.io

Personal academic website of Saikat Mondal, Assistant Professor, Department of Computer Science, Lakehead University.

The site is plain HTML, CSS, and JavaScript. There is no build step and nothing to install. All content lives in small, readable files in the `data/` folder, and every page is drawn from them automatically.

## Folder layout

```
index.html            Home (bio, research at a glance, selected papers, news sidebar)
research.html         Vision, themes with linked papers, tools, collaborations
publications.html     Searchable and filterable publication list
group.html            Lab, current members, how to join, mentorship record
teaching.html         Philosophy, curriculum design, courses
honours.html          Grants, awards, scholarships
service.html          Program committees, reviewing, leadership, talks
news.html             Full news archive with filters
contact.html          Contact details and map
404.html              Friendly "page not found"

data/                 ← EDIT THESE to update the site
  config.js           Name, title, links, email, CV link, lab name, settings
  news.js             News items (sidebar and news page)
  publications.js     Papers (published and under review)
  research.js         Vision, themes, tools, collaborations
  people.js           Group members and mentees
  teaching.js         Courses and curriculum
  honours.js          Grants, awards, scholarships
  service.js          Committees, reviewing, leadership, talks, career path

assets/css/style.css  Design system (colours, type, layout)
assets/js/app.js      Renderer (no need to edit)
assets/favicon.svg    Browser tab icon
img/                  Photos (keep your existing saikatmondal.jpg and father.jpg here)
```

Old addresses such as `publication.html`, `awards.html`, `grants.html`, `projects.html`, `leadership.html`, `thesis.html`, `blog.html`, and `resume.html` now redirect to their new pages, so existing links keep working.

## Common updates

**Add a news item.** Open `data/news.js` and copy an existing block to the top of the list:

```js
{
  date: "2026-12-01",
  tag: "Paper",
  text: "Our paper on <b>something great</b> was accepted at <b>FSE 2027</b>.",
  link: { label: "Preprint", url: "https://arxiv.org/abs/..." }
},
```

Dates can be a full date (`2026-12-01`) or a month (`2026-12`). Items newer than 60 days get a "New" badge automatically. The sidebar shows the six most recent items.

**Add a publication.** Open `data/publications.js` and copy an entry to the top of `published`. Numbers like [38] are calculated for you. Set `selected: true` to feature it on the home page, and add links such as `doi`, `pdf`, `preprint`, `artifact`, `code`, or `slides`. When a paper under review is accepted, move it from `underReview` to the top of `published` and delete its `id` and `status` lines.

**Add a student.** Open `data/people.js` and add them to `current`. Photos are optional (`photo: "img/people/name.jpg"`). Until someone is listed, the group page shows a "founding members wanted" card.

**Change the lab name.** Edit `lab.name` and `lab.focus` in `data/config.js`. It updates everywhere.

**Update your CV.** Replace the PDF in your public files repository, or point `cv` in `data/config.js` to the new location.

**Show or hide things.** In `data/config.js`:

- `recruiting.open` turns the prospective-student call-outs on or off
- `contact.showPhone` shows your phone number
- `showPendingGrants` lists grants that are still under review
- `showTribute` shows the "In loving memory" card on the home page
- `lastUpdated` sets the date in the footer

## Deploying

Upload everything in this folder to the root of the `saikatmondal.github.io` repository and commit. GitHub Pages publishes it within a minute or two. The empty `.nojekyll` file tells GitHub to serve the files as they are.

You can preview locally by opening `index.html` in a browser. No server is needed.

## Features

- Responsive from phones to wide screens, with a slide-out menu on small screens
- Light and dark themes (follows the device, with a toggle that remembers the choice)
- Sticky "Latest News" sidebar on every page
- Publication search, type and year filters, an "Awarded" filter, theme links from the research page, and one-click citation copying
- Accessible markup (skip link, landmarks, keyboard focus styles, reduced-motion support)
- Search-friendly metadata, Open Graph tags, and schema.org Person data
- Print-friendly styles
