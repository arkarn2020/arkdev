---
layout: base.liquid
pagination:
  data: collections.posts
  size: 2
  alias: posts
---

# Welcome to my site!

Not to brag, but it's pretty great.

{% for post in posts reversed %}

#### [{{ post.data.title }}]({{ post.url }})

- <time>{{ post.data.date | date: "%B %dth, %Y" }}</time>

{% endfor %}

{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
<a href="{{pagination.href.next}}">Next Page</a>
{% endif %}
