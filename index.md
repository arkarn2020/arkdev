---
layout: base.liquid
---

# Welcome to my site!

Not to brag, but it's pretty great.

{% for post in collections.posts reversed %}

<a href="{{ post.url }}">

<h2>{{ post.data.title }}</h2>

</a>
<time>{{ post.data.date | date: "%B %dth, %Y" }}</time>

{% endfor %}
