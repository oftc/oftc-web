---
layout: master
title: ElectionResults
---

# Election Results #

{% for page in site.pages %}
{% if page.path contains "ElectionResults/" -%}
* [{{ page.title | remove: "Election Results" }}]({{ page.url }})
{%- endif -%}
{%- endfor %}
