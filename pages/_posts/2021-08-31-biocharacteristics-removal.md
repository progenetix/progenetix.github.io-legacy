---
title: "API: Biosample Schema Update"
layout: default
author: '@mbaudis'
excerpt_separator: <!--more-->
# www_links_formatted:
#  - '<a href=""></a>'
categories:
  - news
tags:
  - Progenetix
  - news
  - documentation
  - API
  - Beacon
---

## {{ page.title }}

The [`Biosample` schema](http://progenetix.org/services/schemas/Biosample/) used for exporting Progenetix data has been adjusted with respect to representation of "bio-"classifications. The previous `biocharacteristics` list parameter has been deprecated and its previous content is now expressed in[^1]:

* `histologicalDiagnosis` (PXF)
* `sampledTissue` (PXF)
* `icdoMorphology` (pgx)
* `icdoTopography` (pgx)

<!--more-->

At this stage we keep the current `extyernalReferences` "grab bag" list.

[^1]: Here, "PGX" means that the attribute is part of the Phenopackets standard, while "pgx" labels it as specific to Progenetix.
