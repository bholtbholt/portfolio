---
title: IE10-Compatible Grid Auto-Placement with Flexbox
published_url: https://css-tricks.com/ie10-compatible-grid-auto-placement-with-flexbox/
publisher: CSS Tricks
jump_line: Read the article on CSS Tricks
tags: CSS
categories: article
bg_color: css-tricks
---

In this <a href="https://css-tricks.com" target="_blank">CSS Tricks</a> article, I share a clever technique that mimics CSS Grid's Auto-Placement feature using Flexbox, making it compatible with IE10+. There are no hacks, no extra markup, and no stretching elements. Just clean cells with gutters, perfectly aligned making it visually indistinguishable.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 260" class="illustration">
  <rect class="illustration__fill opacity-0 animate-grid" width="100" height="80" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-grid animate-offset-1" width="100" height="80" x="110" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-grid animate-offset-2" width="100" height="80" x="220" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-grid animate-offset-3" width="100" height="80" y="90" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-grid animate-offset-4" width="100" height="80" x="110" y="90" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-grid animate-offset-5" width="100" height="80" x="220" y="90" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-grid animate-offset-6" width="100" height="80" y="180" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-grid animate-offset-7" width="100" height="80" x="110" y="180" rx="10"/>
</svg>
