---
title: "Beacon+ and Progenetix Queries by Gene Symbol"
layout: default
author: '@mbaudis'
excerpt_separator: <!--more-->
www_links_formatted:
www_link: https://progenetix.org/beacon-genes/search
categories:
  - news
tags:
  - Progenetix
  - arraymap
  - news
  - Beacon
---

## {{ page.title }}

[![Gene Symbol Selector Example](/assets/img/gene-symbol-selector-example.png){: style="float: right; width: 127px; margin-top: -15px;"}](http://progenetix.org/biosamples/search/)We have introduced a simple option to search directly by Gene Symbol, which will match to _any_ genomic variant with partial overlap to the specified gene. This works by expanding the Gene Symbol (e.g. _TP53_, _CDKN2A_ ...) into a range query for its genomic coordinates (maximum CDR).

Such queries - which would e.g. return all whole-chromosome CNV events covering the gene of interest, too - should be narrowed by providing e.g. `Variant Type` and `Maximum Size` (e.g. 2000000) values.

<!--more-->

For testing we have provided a [dedicated search form](https://progenetix.org/beacon-genes/search) which allows you to test the search for variants by gene symbol and size thresholding. The options may be expanded, e.g. for categorical overlap definitions or range expansions. Please remember that all these searches can be implemented by standard range requests - and even more fine tuned with "bracketed" searches as in the `CNV Request` example for [Beacon+](https://progenetix.org/beacon-plus/search?).
