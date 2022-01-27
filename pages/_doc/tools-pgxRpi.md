---
title: "Tools: pgxRpi, an R Library to Access Progenetix Data"
layout: default
permalink: /doc/tools/pgxRpi.html
www_link: https://github.com/progenetix/pgxRpi
excerpt_separator: <!--more-->
date: 2021-09-16
category:
  - documentation
tags:
  - API
  - documentation
  - Beacon
  - bycon
  - tools
  - R
---

## {{ page.title }}

`pgxRpi` is an API wrapper package to access data from Progenetix database. You can
use it to

* Query biosample information from specific group of interests. The group is chosen by filters. More details see this [link](https://docs.progenetix.org/en/latest/beaconplus.html#filters-filters-filtering-terms).
* Query and export copy number variant data with different output formats, which are compatible for different visualization tools.
* Query and visualize CNV frequency data. Details about how to calculate the frequency map see [here](https://info.progenetix.org/doc/genomic_intervals.html).

<!--more-->

The vignettes are available in [github](https://github.com/progenetix/pgxRpi).
