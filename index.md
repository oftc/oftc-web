---
layout: master
title: Home
---

## Recent News
{% for post in site.posts limit:5 %}
### [{{ post.date | date: "%B %d, %Y" }}]({{ post.url }})
{{ post.content }}
{% endfor %}
