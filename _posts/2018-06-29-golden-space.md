---
published_url: https://bholtbholt.github.io/golden-space/
publisher: Github
jump_line: Check out the project on Github
tags: [Custom Properties, TypeScript, Jest, PostCSS, Parcel]
categories: project
--bg-color: radial-gradient(circle at top right, hsl(47, 95%, 56%) 32%, hsl(40, 70%, 52%))
--font-base: hsl(50, 100%, 94%)
--font-light: hsl(56, 70%, 88%)
--font-primary: hsl(50, 100%, 98%)
---

Curious if there was a perfect space system for web applications, I created _Golden Space_ to try out different ratios and techniques. Ultimately, I didn't uncover the _one true ratio_, but found hand-picking gaps that roughly resembled the Golden Ratio seemed to work best. Hence, the _brass ratio_.

This project also became a playground to practice with some tech I enjoy. I used <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" target="_blank" rel="noreferrer">CSS Custom Properties</a> to dynamically change the ratios, <a href="https://www.typescriptlang.org" target="blank">TypeScript</a> to mimic the <a href="https://guide.elm-lang.org/architecture/" target="_blank" rel="noreferrer">Elm Architecture</a> outside of Elm, <a href="https://jestjs.io" target="_blank" rel="noreferrer">Jest</a> for tests, and <a href="https://parceljs.org" target="blank">Parcel</a> for bundling assets.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 150" class="illustration">
  <rect class="illustration__fill animate-space-2" width="50" height="150" rx="10"/>
  <rect class="illustration__fill animate-space-1" width="50" height="150" x="100" rx="10"/>
  <rect class="illustration__fill" width="50" height="150" x="200" rx="10"/>
</svg>
