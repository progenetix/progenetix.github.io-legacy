---
title:  "Progenetix Resource Documentation"
layout: default
permalink: index.html
date:   2021-02-03
---

## Welcome to the _Progenetix_ documentation pages

The [Progenetix Resource Documentation](http://info.progenetix.org) provides
information  and links related to the [Progenetix](http://progenetix.org)
cancer genome resource and the related [Progenetix code repositories](http://github.com/progenetix/) contains projects, such as data conversion scripts, ontology mappings and code
for the [Beacon+](http://beacon.progenetix.org/ui/) project.

#### _Progentix_ Website Code Repositories

With exception of some utility scripts and external dependencies (e.g. [MongoDB](https://www.mongodb.com/try/download/community)) the following projects provide the vast majority of the software (from database interaction to website) behind Progenetix and Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span>. 

* [`bycon`](https://github.com/progenetix/bycon)
  - Python based service based on the [GA4GH Beacon protocol](http://beacon-project.io)
  - software powering the Progenetix resource
  - [Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span>](http://beacon.progenetix.org/ui/) implementation(s) use the same code base
* [`progenetix-next`](https://github.com/progenetix/progenetix-next)
  - website for Progenetix and its Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span> implementations
  - provides Beacon interfaces for the `bycon` server, as well as other Progenetix sevices (e.g. the [publications](http://progenetix.org/publications/) repository)
  - implemented as [React](https://reactjs.org) / [Next.js](https://nextjs.org) project
* [`PGX`](https://github.com/progenetix/PGX)
  - a Perl ibrary providing utility functions for Progenetix CNV data
  - used for data transformation, e.g. binning of segmental CNV data
  - main purpose now in providing the various plots (CNV histograms, clusterd CNV profiles, array plots)

#### Additional Projects

* [`schemas`](https://github.com/progenetix/schemas)
  - Progenetix data schemas
  - represent an accessible/stable version of the schemas used in [`bycon`](https://github.com/progenetix/bycon)
* [`icdot2uberon`](https://github.com/progenetix/icdot2uberon)
  - mappings between ICD-O 3 topographies and UBERON anatomical sites
* [`ICDOntologies`](https://github.com/progenetix/ICDOntologies)
  - mappings between ICD-O 3 morphology / topography pairs and NCIt neoplasm core
  cancer ontology

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
