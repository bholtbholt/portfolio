---
title: Building Server-Side<br>Components in Ruby on Rails
published_url: https://youtu.be/B3TVDQen_-0?t=1890
publisher: YouTube
jump_line: Watch the video on YouTube
categories: talk
tags: [Ruby on Rails]
--bg-color: radial-gradient(circle, hsl(358, 72%, 45%), hsl(358, 78%, 38%))
--font-base: hsl(358, 76%, 92%)
--font-light: hsl(358, 72%, 88%)
--font-primary: hsl(358, 72%, 95%)
---

To help back-end developers on my team release user interfaces faster, I created a reusable component library in <a href="https://rubyonrails.org" target="_blank" rel="noreferrer">Ruby on Rails</a>, influenced by <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>. Rather than worrying about CSS, they call components with a Rails helper, pass in its props, and have it styled appropriately.

A year later I gave a Lightning Talk at the <a href="http://vanruby.org" target="_blank" rel="noreferrer">Van Ruby Meetup</a> to share the concept since it was working so well.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 974" class="illustration">
  <path class="illustration__fill animate-shimmer opacity-50 animate-offset-1" d="M699.6 738.1L907.9 923 498 890.8c80.3-48.5 146.6-106.5 196.2-152.6.8.2 1.7.2 2.6.2.9.1 1.8-.1 2.8-.3zm230.6 110.5L968.6 346c-19 48.5-49 105-87.9 165.3l49.5 337.3zM713.5 726.7l207.9 184.5-55.5-377.5c-45.8 68-100.7 137.6-152.4 193z"/>
  <path class="illustration__fill animate-shimmer opacity-50" d="M470.7 906.6c-44.8 24.8-90.9 44.6-137.5 59l479-32.2-341.4-26.8h-.1zm-400-242.1l125.5 293.2 103.3-342.1-228.8 48.9zm259.2-66.3l349.4 112.2-89.2-353.3-260.2 241.1zm279.8-276.1l325.7-21.8-254.6-208-71.1 229.8z"/>
  <path class="illustration__fill animate-shimmer opacity-50 animate-offset-2" d="M794.9 1.6L581.2.6l95 66.5L794.9 1.6z"/>
  <path class="illustration__fill animate-shimmer opacity-50 animate-offset-3" d="M8.2 540.2l-7 208.4 51.3-93.5L8.2 540.2z"/>
  <path class="illustration__fill animate-shimmer opacity-50 animate-offset-4" d="M125 623.9c40.6 2.6 81.7-6.4 123.1-24.5 27.9-13.2 56.8-29.9 85.9-49.6 41.6-29.4 83.6-66.2 125.9-108.1 152-150.7 214.5-319.3 148-386.4-15.9-16-38.6-24.2-67.5-24.3-87.6-.4-218.4 65.5-330 176.1-106.5 105.7-175.7 231.1-176 319.6-.1 31.5 8.6 56.2 25.9 73.7 15.3 15.5 37.1 21.8 64.7 23.5zm317.3 277.7c4.8-2.5 9.5-5 14.2-7.5L315.8 622.8 210 973.3c.9-.1 8-1 8-1 9.2-1.2 18.4-2.5 27.4-4.1 58.1-9.9 115.7-28.1 171-54 8.7-4 17.4-8.2 25.9-12.6zm287.1-223.8l3.3-3.8c2.3-2.7 4.7-5.5 7-8.3 0 0 7.2-8.6 10-12 4.7-5.7 9.4-11.5 14.1-17.4 4.3-5.4 8.6-10.8 13-16.4 4.5-5.8 9-11.6 13.5-17.5 10.2-13.4 20.4-27.4 31.4-42.9 11.6-16.4 22.8-32.9 33.4-49.1l-19-11.6c-50.6-30.9-152.2-93.2-219-134.3L703.6 707c8.1-8.8 16.6-18.4 25.8-29.2zm244.3-551.4L704.8 88.6l256.4 209.7c9-29.7 14.9-58.5 17.4-85.7.4-3.8.6-7.6.8-11.5.2-3.6.3-7.1.4-10.7.7-23.2-1.4-44.7-6.1-64z"/>
  <path class="illustration__fill animate-shimmer opacity-50 animate-offset-5" d="M870.3 494.2c.7-.9 1.4-1.8 2.2-3 5.1-7.2 12.4-19.1 20.5-33.4 22.5-39.7 50.3-96.4 61.9-138.1L620.5 342c69.8 42.9 171.7 105.3 222.4 136.3l27 16.5c.1-.2.3-.4.4-.6z"/>
  <path class="illustration__fill animate-shimmer opacity-50 animate-offset-6" d="M469.4 890l1-.6c73-40.4 138.2-90.2 211.2-161.3L326.1 613.4 469.4 890z"/>
  <path class="illustration__fill animate-shimmer opacity-50 animate-offset-7" d="M0 786.1c1.6 46.3 11.4 84.5 29.2 113.9l16.6-197.8L0 786.1zm64.8-96.9L45.6 917.4c27.3 35.7 63.8 51.7 118 51.7 5.5 0 11.1-.2 17.2-.4l-9.6-23.8c-20.7-51.6-79.8-198.5-106.4-255.7zm904.9-576.9c-3.9-12.1-9-23.2-15-33.2-24.2-40.3-66-66.1-124.4-76.7L700 74.4l269.7 37.9z"/>
</svg>
