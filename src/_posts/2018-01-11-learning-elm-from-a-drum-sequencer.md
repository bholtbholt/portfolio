---
title: Learning Elm from a<br>Drum Sequencer
published_url: https://www.smashingmagazine.com/2018/01/learning-elm-drum-sequencer-part-1/
publisher: Smashing Magazine
jump_line: Read the article on Smashing Magazine
tags: Elm PostCSS
categories: article
bg_color: drum
---

After completing a handful of projects in <a href="https://elm-lang.org" target="_blank">Elm</a>, I was hooked and wanted to share something fun with people who hadn't yet tried it. In this two-part series, I walk through the steps to create <a href="https://bholtbholt.github.io/step-sequencer/" target="_blank">this drum sequencer</a>. Readers are introduced to Elm's syntax, setup, and core concepts, then complier-driven refactors, side-effects, and communication with JavaScript.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 170" class="illustration">
  <rect class="illustration__fill opacity-0 animate-sequencer" width="50" height="50" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer" width="50" height="50" y="120" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-1" width="50" height="50" x="60" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-2" width="50" height="50" x="120" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-2" width="50" height="50" x="120" y="60" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-3" width="50" height="50" x="180" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-4" width="50" height="50" x="240" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-4" width="50" height="50" x="240" y="120" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-5" width="50" height="50" x="300" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-6" width="50" height="50" x="360" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-6" width="50" height="50" x="360" y="60" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-7" width="50" height="50" x="420" rx="10"/>
  <rect class="illustration__fill opacity-0 animate-sequencer animate-offset-7" width="50" height="50" x="420" y="120" rx="10"/>
</svg>
