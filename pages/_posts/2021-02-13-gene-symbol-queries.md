---
title: "Beacon+ and Progenetix Queries by Gene Symbol"
layout: default
author: '@mbaudis'
excerpt_separator: <!--more-->
www_links_formatted:
categories:
  - news
tags:
  - Progenetix
  - arraymap
  - news
  - Beacon
---

## {{ page.title }}

[![Gene Symbol Selector Example](/assets/img/gene-symbol-selector-example.png){: style="float: right; width: 120px;"}](http://progenetix.org/biosamples/search/)We have introduced a simple option to search directly by Gene Symbol, which will match to _any_ genomic variant with partial overlap to the specified gene. This works by expanding the Gene Symbol (e.g. _TP53_, _CDKN2A_ ...) into a range query for its genomic coordinates (maximum CDR).

<!--more-->

Such queries - which would e.g. return all whole-chromosome CNV events covering the gene of interest, too - should be narrowed by providing e.g. `Variant Type` and `Maximum Size` (e.g. 2000000) values.