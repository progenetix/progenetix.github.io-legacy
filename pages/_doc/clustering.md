---
title: "Clustering"
date: 2021-06-22
layout: default
permalink: /doc/clustering.html
author: Michael Baudis
excerpt_separator: <!--more-->
category:
  - documentation
tags:
  - documentation
  - API
  - PGX
  - graphics
  - bycon
---

## {{ page.title }}

The Progenetix CNV visualization includes some default clustering for sample CNV profiles and
collation CNV frequencies.

<!--more-->

The resource uses a standard [CNV binning model](/doc/genomic_intervals.html)
with (in GRCh38) 3102 intervals of 1MB default size. For the clustering of both status and
frequency values, gain and loss intervals are treated independently, resulting in 6204
values per sample (or collation) for the generation of a clustering matrix.

On the website sample and/or collation clustering is involved automatically on the
"Data Visualization" page which can be accessed from the search results. Clustering as
well as CNV visualization are performed through the [**PGX**](http://github.com/progenetix/PGX/)
Perl library, utilizing the `Algorithm::Cluster` interface to the C cluster library with
default parameters:

* `m`: pairwise complete-linkage clustering
* `e`: Euclidean distance

Clustering can be omitted by setting `Cluster Tree Width` to `0`.

More information is made availanble in the [Use Cases](/categories/usecases.html) category.
