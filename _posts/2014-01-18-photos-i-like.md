---
tags: photography
---

<article>
<h1>Photos I Like</h1>
<p>I'm not much of a photographer. I don't even own a camera. Luckily I have an iPhone with Instagram so all my photos look quaint. These are some I like.</p>
<div class="galleryRow">
  {% for image in (1..48) %}
    <a href="images/photos/photos{{ image }}.jpg" class="fancybox" rel="Photos">
      <img src="images/photos/photos{{ image }}-thumb.jpg" width="132" height="132">
    </a>
  {% endfor %}
</div>
</article>
<div class="clear"></div>
