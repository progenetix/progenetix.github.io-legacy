---
title: "Services: Genespans"
layout: default
permalink: /doc/services/genespans.html
www_link: https://github.com/progenetix/bycon
excerpt_separator: <!--more-->
date: 2020-10-20
category:
  - documentation
tags:
  - API
  - documentation
  - Beacon
  - bycon
  - Python
  - services
---

## {{ page.title }}

* [Documentation Link](https://github.com/progenetix/bycon/blob/master/services/doc/genespans.md)
* [Source Link](https://github.com/progenetix/bycon/blob/master/services/genespans.py)

* genomic mappings of gene coordinats
* initially limited to _GRCh38_ and overall CDS extension
* responds to (start-anchored) text input of HUGO gene symbols using the `geneId`
parameter
* returns a list of matching gene objects (see below under __Response Formats__)

<!--podmd-->

##### Examples

* <https://progenetix.org/services/genespans?geneId=CDKN2>

<!--/podmd-->
