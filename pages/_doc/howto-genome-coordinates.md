---
title: "Genome Coordinates"
date: 2018-05-08
layout: default
permalink: /howto/genome-coordinates.html
author: Michael Baudis
excerpt_separator: <!--more-->
category:
  - howto
tags:
  - resources
---

## {{ page.title }}

### Gene Lists and Coordinates in Progenetix and arrayMap

For gene coordinates, we use a mapping of the genes' maximum CDR as derived from mapping resources.

<!--more-->

 Currently, we use the UCSC file repositories for getting the various gene annotations, and map the minimum start/maximum end positions of the genes' exon coordinates. The original sources can be found on the UCSC servers, e.g. for genome hg18 in http://hgdownload.cse.ucsc.edu/goldenpath/hg18/database/.

The files used for mapping are:

* ensGene.txt
* mgcGenes.txt
* refGene.txt

Since gene coordinates are mostly presented as fast track search/labelling support, we avoid representation of alternative reading frames etc. Please refer to primary resources for these purposes.

### Cytobands

Cytogenetic band information is used for genome mapping e.g. to localise ISCN style annotations from chromosomal CGH experiments to the Golden Path. The coordinates are derived from the UCSC ideogram file for the corresponding genome edition, e.g. for [UCSC hg18 (file)](http://hgdownload.cse.ucsc.edu/goldenpath/hg18/database/cytoBand.txt.gz).
