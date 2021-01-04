---
title:  "Progenetix Resource Documentation"
layout: default
permalink: index.html
date:   2020-09-30
---

## Welcome to the _Progenetix_ documentation pages

The [Progenetix Resource Documentation](http://info.progenetix.org) provides
information  and links related to the [Progenetix](http://progenetix.org)
cancer genome resource and the related [Progenetix code repositories](http://github.com/progenetix/) contains projects, such as data conversion scripts, ontology mappings and code
for the [Beacon+](http://beacon.progenetix.org/ui/) project.

### Some Additional Information on Project Pages

* [icdot2uberon](https://github.com/progenetix/icdot2uberon)
  - mappings between ICD-O 3 topographies and UBERON anatomical sites
* [ICDOntologies](https://github.com/progenetix/ICDOntologies)
  - mappings between ICD-O 3 morphology / topography pairs and NCIt neoplasm core
  cancer ontology
* [bycon](https://github.com/progenetix/bycon)
  - Python based implementation of a GA4GH Beacon service, used to drive the
  Progenetix resource and to empower the [Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span>](http://beacon.progenetix.org/ui/) implementation

### Latest [News](/categories/news.html)

{% assign cat_posts = site.emptyArray %}
{%- for post in site.documents -%}
  {%- if post.categories contains "news" -%}
    {%- assign cat_posts = cat_posts | push: post -%}
  {%- endif -%}
{%- endfor -%}

{% assign cat_posts = cat_posts | sort: 'date' | reverse %}
{% assign post_counter = 0 %}

{%- for post in cat_posts -%}
  {%- unless post_counter > 4 -%}
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


### Support or Contact

For requests & support, please use standard Github procedures such as pull
requests or issues, or [contact](mailto:contact@progenetix.org) the developers.
