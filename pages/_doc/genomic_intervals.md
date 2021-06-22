---
title: "Genomic Intervals and Binning"
date: 2021-06-22
layout: default
permalink: /doc/genomic_intervals.html
author: Michael Baudis
excerpt_separator: <!--more-->
category:
  - documentation
tags:
  - documentation
  - API
  - PGX
  - bycon
---

## {{ page.title }}

The resource uses a standard CNV binning model with (in GRCh38) 3102 intervals
of 1MB default size. Binned genome CNV values are available for all individual
analyses (genome profiles), indicating the interval's involvement in one or more
CNV events, separated for gains and losses.

Additionally, for all all _collations_ (e.g. profiles of a tumor type, or from
the same publication), pre-computed interval CNV frequencies are available
Alternatively, interval frequency maps can be generated on the fly from
e.g. search results.

<!--more-->

The binning does _not_ apply to the variant data itself; i.e.
genomic variants are stored and being queried with their original parameters.

### Binning Procedure

Binned CNV mappings are generated through utility functions in the
[**bycon**](http://github.com/progenetix/bycon/) package.

* a standard set of 1Mb genomic intervals (0-based interbase coordinates)
is generated, with breaks at chromosomal telomeres using the chromosome size
coordinates from the current (GRCh38) cytoband mapping file
* for each analysis/callset, all its CNV variants are collected and for each
of the (currently 3102) intervals the sum of variant intersections is used to
calculate the overlap fraction, for gains and losses separately (accommodating
for the smaller sizes of q-telomeric bins)
* additionally, the maximum and minimum CNV values (log2) are stored for each bin

As a result, all samples have now 2x3102 values for gain and loss overlap fractions
as well as - for samples with accessible original data - relative CNV intensities.

### Frequency Maps

CNV frequencies are calculated for collations, or samples from search results, by
counting the occurrences of non-zero status values for all given intervals in the
selected samples, with an optional filter for a minimal fraction.

More information is made availanble in the [Use Cases](/categories/usecases.html) category.
