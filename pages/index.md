---
title:  "Progenetix Info & News"
layout: default
permalink: index.html
date:   2022-02-01
---

## Welcome _Progenetix_ [News](/categories/news.html)

{% assign cat_posts = site.emptyArray %}
{%- for post in site.documents -%}
  {%- if post.categories contains "news" -%}
    {%- assign cat_posts = cat_posts | push: post -%}
  {%- endif -%}
{%- endfor -%}

{% assign cat_posts = cat_posts | sort: 'date' | reverse %}
{% assign post_counter = 0 %}

<!-- {%- for post in cat_posts -%} -->
{%- for post in site.posts -%}
  {%- unless post_counter > 30 -%}
    {%- unless post.tags contains '.prepend' or post.tags contains '.append' -%}
      {% assign post_counter = post_counter | plus: 1 %}
      {%- assign post_author = post.author | downcase -%}
      {%- assign excerpt_link = post.url | relative_url -%}
      {%- if post.excerpt_link contains '/' -%}{%- assign excerpt_link = post.excerpt_link -%}{%- endif -%}
<div class="excerpt">
  <a href="{{ excerpt_link }}">{{ post.excerpt }}</a>
  <p class="footnote">
      {%- if post.author -%}{{ post.author | join: " | " }}&nbsp;{%- endif -%}
      {%- if post.date -%}{{ post.date | date: "%Y-%m-%d" }}: {% endif %}
      <a href="{{ excerpt_link }}">more ...</a>
  </p>
</div>
    {%- endunless -%}  
  {%- endunless -%}  
{%- endfor -%}

----

### Support or Contact

The [Progenetix Resource Documentation](http://info.progenetix.org) provides
information  and links related to the [Progenetix](http://progenetix.org)
cancer genome resource and the related [Progenetix code repositories](http://github.com/progenetix/) contains projects, such as data conversion scripts, ontology mappings and code for the [Beacon+](http://beacon.progenetix.org/ui/) project.

For requests & support, please use standard Github procedures such as pull
requests or issues, or [contact](mailto:contact@progenetix.org) the developers.
