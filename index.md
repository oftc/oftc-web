---
layout: master
title: Home
---

## Recent News
{% for post in site.posts limit:5 %}
{% ifchanged month %}### {{ post.date | date: "%B %Y" }}{% endifchanged %}
{{ post.content }}
{% endfor %}
