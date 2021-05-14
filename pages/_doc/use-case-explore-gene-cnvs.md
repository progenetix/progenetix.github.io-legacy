---
title: "Use Case - Explore Gene CNVs"
date: 2021-04-20
layout: default
author: "@mbaudis"
permalink: "/doc/use-case-explore-gene-cnvs.html"
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:
  - '<a href="https://progenetix.org/biosamples/" target="_blank">[Progenetix Search Page]</a>'
category:
  - use_cases
tags:
  - Progenetix
  - news
  - documentation
---

## {{ page.title }}

One of the main use cases for the Progenetix resource is the exploration of frequency and disease specificity of genes of interest. Traditionally, the relevance of somatic CNVs hitting a gene in the context of cancer are judged by

* the CNV frequency (i.e. in what fraction of samples the a CNV in this gene is being observed)
* the relative specificity, i.e. how CNVs in this gene compare to
  - the overall amount of CNVs in the samples
  - the local specificity, i.e. the "focality" of the CNVs

<!--more-->

The [Progenetix Search Page](https://progenetix.org/biosamples/) supports the exploration of regional CNVs through

* support for inserting positions of genes or cytobands into standard Beacon query parameter fields
* selection support for hierarchical disease annotations
* providing example queries as templates

The response of the queries for genomic variants provide some basic statistics, e.g. the relative frequencies of these variants for each classification code (e.g. NCIT, ICD-O) encountered in teh matched samples.

#### Example Procedure

**TBD**
