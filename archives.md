---
layout: master
title: News Archive
---

* toc
{:toc}

# News Archive
{% for post in site.posts %}
{% ifchanged year %}
{% if forloop.index > 1 %}
<hr/>
{% endif %}
## {{ post.date | date: "%Y" }}{% endifchanged %}
### [{{ post.date | date: "%B %d" }}]({{ post.url }})
{:.no_toc}
{{ post.content }}
{% endfor %}

