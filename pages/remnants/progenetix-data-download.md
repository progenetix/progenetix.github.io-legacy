---
title: 'Progenetix segment file format'
date: 2019-06-27
layout: default
category:
  - howto
tags: 
  - progenetix
  - arraymap
  - documentation
  - guide
  - code
---

## {{ page.title }}

The standard CNV segment file is a tab-delimited list, including the sample UID in the first column:

<pre>

sampleID	chro	basestart	basestop	segvalue	probes
GIST-ass-15	1	0	124299999	-1	NA
GIST-ass-16	1	142400000	149599999	1	NA
...
</pre>

Depending on the active page, the value may be the original log2 value from an array or the status marker. "Probes" will only display a value when plotting array specific data.

Please be aware that segments may be filtered out if values below the standard threshold (0.15 | -0.15) are provided, or very small numbers are given for probes (leaving them empty is o.k.).

