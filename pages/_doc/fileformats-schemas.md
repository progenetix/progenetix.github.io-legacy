---
title: "Progenetix File Formats"
date: 2021-02-22
layout: default
author: "@mbaudis"
permalink: "/doc/fileformats.html"
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:
  - '<a href="https://info.progenetix.org/assets/examples/testfile_labeled_groups.pgxseg" target="_blank">[Download <i>.pgxseg</i> testfile]</a>'
  - '<a href="https://github.com/progenetix/progenetix.github.io/blob/master/assets/examples/testfile_labeled_groups.pgxseg">[<i>.pgxseg</i> testfile on Github]</a>'
category:
  - howto
  - news
tags:
  - arraymap
  - Progenetix
  - code
  - news
  - API
  - schemas
  - files
---

## {{ page.title }}

### Standard Progenetix Segment Files `.pgxseg`

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

For example, with 78 samples in three NCIt cancer types, an excerpt of the segment file would look like below:

```
# sample_id=GSM253303;group_id=NCIT:C4028;group_label="Cervical Squamous Cell Carcinoma, Not Otherwise Specified"
# sample_id=GSM388959;group_id=NCIT:C4024;group_label="Esophageal Squamous Cell Carcinoma"
# sample_id=GSM252886;group_id=NCIT:C6958;group_label="Astrocytic Tumor"
sample_id	reference_name	start	end	value
GSM252886	1	911484	11993973	-0.4486
GSM252886	1	12158755	22246766	0.2859
GSM252886	1	22346353	24149880	-0.5713
GSM252886	1	24160170	33603123	0.0812
GSM252886	1	33683474	37248987	-0.6478
GSM252886	1	37391587	248655165	0.0342
GSM252886	2	110819	240942225	-0.0007
GSM252886	3	119131	4655519	-0.0122
GSM252886	3	4662952	4857477	0.9273
...
```

