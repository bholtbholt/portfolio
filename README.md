# My Portfolio

My portfolio project. Built on [Jekyll](https://jekyllrb.com).

## Running this project locally

It uses Bundler and Jekyll. To install:

```
# Ensure bundle is installed
gem install bundler

# Install the gems
bundle install
```

Run with:

```
bundle exec jekyll serve
```

or run with NPM

```
npm run start
```

## Structure & Content

There are two folders containing content:

- `src/_posts`: content for "Work". Follows basic Jekyll Posts
- `src/_now`: content for "Now". Custom collection similar to Jekyll Posts

### Work/Post Content

All posts are written in Markdown and should be under 600 characters because of scroll-snapping on mobile devices. Work front matter includes:

| Front Matter Name | Expected Content                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| published_url     | An external URL to see the work.                                                                                   |
| publisher         | Name of where the content is published. Used in "Work published on #{publisher}".                                  |
| jump_line         | Full text for the jump line. Allows customized actions, like "read", "check out", "watch", etc.                    |
| categories        | Basic Jekyll categories. Used to categorize types of work.                                                         |
| tags              | Basic Jekyll tags. Used to tag technologies worked with.                                                           |
| bg_color          | CSS class that corresponds to \_sass/components/post.scss modifier class. Used to set background and text colours. |

### Now Content

Nows are snapshots in time to briefly talk about what happened then. Kinda micro-blogging. It doesn't take any front matter variables, but file names **must be named** like Jekyll posts: `YYYY-MM-DD-now.md`. Note `-now` at the end of the file name is required to automatically sort content by latest.
