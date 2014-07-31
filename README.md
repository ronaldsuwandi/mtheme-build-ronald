mtheme-ronald
=============

Mediumesque theme for Ghost. Forked from [mtheme](https://github.com/readypress/mtheme/releases/)

### Additional Features (compared to the original mtheme)

- Full screen hero image on the index (also has down arrow)
- Automatic image brightness detection on the post to determine whether to use light or dark text as the header (also for the arrow)
- Uses font-awesome for the footer for various social links (linkedin, github, bitbucket, dribbble, etc)
- Uses Avenir font for the text if exists, other wise uses Muli
- Uses Merriweather and Muli fonts from Google Web Fonts (self-hosted Muli for the bold typeface)
- Slightly modified `blockquote` design
- `<cite>` wrapped within `blockquote` will be displayed on the right with a smaller font
- Slight transition animation for `<a>` links
- Added `<spoiler>` tag support. Text contained within the tag will be hidden unless being hovered/clicked
- Copyright year is added automatically from the latest post
- Blog logo is supported but only up to maximum height of 100px
- Image in post by default will be centered (margin auto). To avoid this, add `inline` class within `<img>` tag manually (You can't use markdown image styling at this time)
- Tag-specific page

### Features

- Supports cover images for posts (hackilly, but true)
- Has subtle CSS animations on scroll
- Responsive images within the post
- Mobile-friendly
- Supports static pages

### Download
The latest release can be downloaded from the [releases](https://github.com/readypress/mtheme/releases/) page.

### Quick Usage Rundown

#### Initial Block
The 'initial' block in the upper left is automatically derived from the blog's title, using the first letter therein. It simply links back to the index of the blog.

#### Cover Images for the Blog
The cover images can be changed by droppping new images in the assets/images directory called 'cover.jpg' and 'cover_blur.jpg' respectively.

#### Cover Images for Posts
Adding a cover image to a post is as simple as creating an image in your markup with an alt tag of COVER_IMAGE

`![COVER_IMAGE]`

...and uploading an image to that placeholder location from within Ghost.

All other photos in the post are treated as regular photos.

#### External Resources / Static Pages
For now, linking to pages and external resources is done in the footer, which is located in the partials directroy.

`partials/blog_footer.hbs'

Links can be added and changed there.

#### Disqus support
Within post.hbs, at the bottom is a section that can be uncommented and filled in to provide disqus functionality to your posts.

Make sure to fill in your disqus website shortname.

### Screenshot

![screenshot](https://raw.githubusercontent.com/readypress/mtheme-build/master/screenshot.jpg)


mtheme's cover images courtesy GH Cheng (http://www.flickr.com/photos/ghcheng/) from creative commons licenced photos.