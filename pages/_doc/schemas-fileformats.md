---
title: "Progenetix File Formats"
date: 2021-02-10
layout: default
author: "@mbaudis"
permalink: "/doc/fileformats.html"
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:   # use this for one or more, complete HTML link(s) with label '<a href="http://" target="_blank">...</a>'
category:
  - data
tags:
  - arraymap
  - Progenetix
  - code
  - server
  - news
  - API
  - schemas
  - files
---

## {{ page.title }}

### Progenetix Segment files `.pgxseg`

Progenetix uses a variation of a standard tab-separated columnar text file such as produced by array or sequencing CNV software, with an optional metadata header for e.g. plot or grouping instructions.

<!--more-->

* a standard tab-delimited Progenetix segments file
  - an additional header may exist
  - only first 5 columns are necessary
  - column 5 (mean) can be empty or dot, if column 7 exists and contains status value
  - undefined fields in existing columns are replaced with the "." character
* header (optional)
  - header lines start with the `#` character
  - the `sample_id` parameter is required to assign values (e.g. group labels) to samples
  - `parameter=value` pairs are semicolon-separated
  - values may be wrapped in double quotation marks (`group_label="Ductal Breast Carcinoma"`)
  - supported tags
    * `sample_id` is required and has to correspond to column 1 values
    * `group_id` should be used for grouping
    * `group_label` is optional for grouping / labeling of the groups

```
# sample_id=GSM481286;group_id=NCIT:C4017;group_label="Ductal Breast Carcinoma"
# sample_id=GSM481418;group_id=NCIT:C3059;group_label=Glioma
sample_id	chro	start	stop	mean	probes	variant_type
GSM481286	1	742429	7883881	-0.1594	699	DEL
GSM481286	2	115673158	115705254	-0.3829	8	DEL
GSM481286	3	115722621	119771659	0.167	424	DUP
GSM481286	4	119776776	162617092	0.4168	1587	DUP
GSM481418	5	162621657	165278686	.	.	DUP
GSM481418	6	165280711	167221337	.	.	DUP
GSM481418	7	167248788	168289603	0.6784	.	DUP
...
```
