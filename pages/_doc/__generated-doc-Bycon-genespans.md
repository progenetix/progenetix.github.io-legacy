---
title: "genespans.md Python Code Documentation"
layout: default
www_link: https://github.com/progenetix/bycon
excerpt_separator: <!--more-->
date: 2020-10-21
category:
  - howto
tags:
  - code
  - documentation
  - Beacon
  - bycon
  - Python
  - Bycon
---

## {{ page.title }}

<!--more-->

* [Source Link](https://github.com/progenetix/bycon/blob/master/services/doc/genespans.md) 

<!--podmd-->
## _genespans_

* genomic mappings of gene coordinats
* initially limited to _GRCh38_ and overall CDS extension
* responds to (start-anchored) text input of HUGO gene symbols using the `geneId`
parameter
* returns a list of matching gene objects (see below under __Response Formats__)

##### Examples

* <https://progenetix.org/services/genespans?geneId=CDKN2>

<!--/podmd-->
