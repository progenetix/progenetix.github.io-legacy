---
title: "Progenetix Image Formats"
date: 2021-02-12
layout: default
author: "@mbaudis"
permalink: "/doc/imageformats.html"
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:   # use this for one or more, complete HTML link(s) with label '<a href="http://" target="_blank">...</a>'
category:
  - documentation
tags:
  - arraymap
  - Progenetix
  - news
  - API
  - schemas
  - files
  - graphics
---

## {{ page.title }}

The standard format for (plot-)images generated on Progenetix is Scalable Vector Graphics ([SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)). As the name implies, SVG is _scalable_, i.e. images can be scaled up without loosing quality or expanding in storage size. However, some of teh generated images use also embedded rastered components which will deteriorate during scaling - this is e.g. the case for array probe plots.

According to [Wikipedia](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

> All major modern web browsers—including Mozilla Firefox, Internet Explorer, Google Chrome, Opera, Safari, and Microsoft Edge—have SVG rendering support

On most pages where plots are being displayed there is a download option for the images - (please alert us where those are missing). Browsers also have the option to export SVGs themselves e.g. as PDF.

<!--more-->

### The PGX plotting library

Plots on Progenetix are generated using the [PGX package](http://github.com/progenetix/PGX/), a set of Perl libraries for processing and graphical representation of CNV data. The package contains tools to

* read and write e.g. [Progentix segment files](/doc/fileformats.html)
* generate binned status maps
* render plots of sample-specific and aggregate CNV data, such as histograms and CNV frequency heatmaps
