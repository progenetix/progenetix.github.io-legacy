---
title: "Use Case - Download or Plot CNV Frequencies"
date: 2021-05-14
layout: default
author: "@mbaudis"
permalink: "/doc/use-case-interval-frequencies.html"
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:
  - '<a href="/doc/fileformats.html" target="_blank">[Progenetix file formats]</a>'
  - '<a href="/doc/services/intervalfrequencies.html" target="_blank">[IntervalFrequencies API Service]</a>'  
category:
  - usecases
tags:
  - Progenetix
  - news
  - files
  - API
  - files
  - graphics
  - documentation
---

## {{ page.title }}
{:.no_toc}

The Progenetix resource provides pre-computed CNV frequencies for all its
"collations" such as

* cancer types by e.g. NCIt, ICD-O morphology and topography codes
* experimental series, e.g. all samples from a given publication
* custom cohorts, e.g. all samples used in a Progenetix meta-analysis or
external project such as TCGA

This data can be accessed through the Progenetix API in data and image format.

![Example CNV histogram with custom parameters](https://progenetix.org/cgi/PGX/cgi/collationPlots.cgi?id=NCIT:C7376&-size_plotarea_h_px=40&-value_plot_y_max=50&-colorschema=bluered&-chr2plot=1,3,9,17,22)

<!--more-->

Interval frequencies are per default stored in a 1Mb binned format. More
information about the API use can be found [in the IntervalFrequencies API documentation](/doc/services/intervalfrequencies.html).

----
**Contents**
* TOC
{:toc}
----

### Example Procedure - Download CNV Frequencies

Typical cases for the use of collation-specific frequency data could be e.g.
the visualization of CNV tracks with 3rd party tools such as [Circos](http://www.circos.ca/software/)
or integration in data analysis workflows, e.g. for comparing target genes to
local, disease-specific CNV frequencies.

#### Getting cancer type CNV frequencies

All cancer codes for a given classification system can be retrieved though:

* NCIT
  - <https://progenetix.org/services/collations?filters=NCIT&method=counts&responseType=text>
* ICD-O Morphologies
  - <https://progenetix.org/services/collations?filters=icdom&method=counts&responseType=text>
  - please be aware that we have to use transformed ICD-O codes; e.g.
  "ICD-O 8500/3" is represented as `icdom-85003` (`s/^(\d{4})\/(\d)$/icdom-$1$2/`)
* ICD-O Topographies
  - <https://progenetix.org/services/collations?filters=icdot&method=counts&responseType=text>

#### Download the data file

For any of those codes one can create a `.pgxseg` file downloader link for the
["IntervalFrequencies" service](/doc/services/intervalfrequencies.html):

##### Examples

* https://progenetix.org/services/intervalFrequencies/?method=pgxseg&filters=NCIT:C105555
* https://progenetix.org/services/intervalFrequencies/?method=pgxseg&filters=icdom-85003


### Example Procedure - Download or embed CNV frequency plot

For the generation of CNV frequency plots, the same procedure as above for
identifying existing frequency maps can be applied. CNV hsitograms in [SVG format](/doc/imageformats.html)
can be generated for download or embedding through a canonical service URL with
added (single) collation code.

##### Examples

* <https://progenetix.org/services/collationPlots/?id=icdom-85003>
* <https://progenetix.org/services/collationPlots/?id=PMID:22824167>

#### Additional plot parameters

Plot parameters can be added to the request using a standard `&-__parameter__=__value__`
syntax. Please be aware of the `-` prefix.

* `-size_plotimage_w_px`
  - modifies the width of the plot image in px (default 800)
  - <https://progenetix.org/services/collationPlots/?id=PMID:22824167&-size_plotimage_w_px=1084>
* `-size_plotarea_h_px`
  - height of the plot area (excluding labels etc.) in px (default 100)
  - <https://progenetix.org/cgi/PGX/cgi/collationPlots.cgi?id=NCIT:C7376&-size_plotarea_h_px=300>
* `-value_plot_y_max`
  - modifies the histogram's maximum value in percent (default 100)
  - <https://progenetix.org/cgi/PGX/cgi/collationPlots.cgi?id=pgxcohort-TCGAcancers&-value_plot_y_max=50>
* `-colorschema`
  - change of colors used for gains and losses
  - options
    * `orangeblue` (default)
    * `redgreen`
    * `greenred`
    * `bluered`
* `-chr2plot`
  - comma-concatenated list of chromosomes to plot
  - default is 1 -> 22 since X & Y are not always correctly normalized for CNV
  frequencies
    * `-chr2plot=1,2,3,44,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,X,Y`
    * `-chr2plot=9`

  - <https://progenetix.org/cgi/PGX/cgi/collationPlots.cgi?id=NCIT:C7376&-size_plotarea_h_px=40&-value_plot_y_max=50&-colorschema=bluered&-chr2plot=1,3,9,17,22>
    * see example above (live representation of embedded API call for this example)
