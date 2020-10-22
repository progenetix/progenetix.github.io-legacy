---
title: "subset-details.js JavaScript Code Documentation"
layout: default
www_link: 
excerpt_separator: <!--more-->
date: 2020-10-21
category:
  - howto
tags:
  - code
  - documentation
  - JavaScript
  - PGXJS
---

## {{ page.title }}

<!--more-->

* [Source Link](/assets/js/pgxjs/subset-details.js) 

TODO: Not implemented yet; still copy of publications script
For accessing the Progenetix API, here a list construct is used in both server
and client although only one entry will be returned.

__TODO__: error catch & display

Depending on sample counts ("progenetix_biosamples_count" ...) greater than 0,
histogram plots are requested for the pre-calculated CNV frequencies and added
to the respective div element.  

