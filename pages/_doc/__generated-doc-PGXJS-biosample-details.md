---
title: "biosample-details.js JavaScript Code Documentation"
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

* [Source Link](/assets/js/pgxjs/biosample-details.js) 

The script will 

* extract an _id_ parameter from the URL the parent page is called with
* use this as a filter in queries against the _biosamples_ collection and
the subset histogram generation script 
* populate the biosample details elements on the calling page and add the (if 
existing) "arrayplot" callset representation(s) 

For accessing the Progenetix API, here a list construct is used in both server
and client although only one entry will be returned.

__TODO__: error catch & display


