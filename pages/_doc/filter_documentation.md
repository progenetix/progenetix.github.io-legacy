---
title: "Filter Documentation"
date: 2021-04-14
layout: default
author: "@qingyao"
permalink: "/doc/filters-documentation.html"
excerpt_separator: <!--more-->
category:
  - documentation
tags:
  - arraymap
  - news
  - Progenetix
  - news
  - API
  - schemas
  - files
  - filters
  - .featured
---

{{ page.title }}
----------------

For non-genomic parameters, the Progenetix resource uses a query syntax based
around the [Beacon v2 "filters"](https://beacon-project.io/v2/filters.html)
concept.

<!--more-->

### List of filters recognized by different query endpoints

Generally, a [CURIE](https://www.w3.org/TR/2010/NOTE-curie-20101216/) syntax is
used whenever available.

#### Ontology with CURIE-based syntax

| CURIE prefix        |  Code/Ontology          | Examples |
| ------------- |:-------------:| ----- |
| NCIT    | NCIt Neoplasm [^1] | NCIT:C27676 |
| HP      | HPO[^2] | HP:0012209 |
| PMID    | NCBI Pubmed ID | PMID:28966033 |
| geo   | NCBI Gene Expression Omnibus[^3] | geo:GPL6504, geo:GSE19331, geo:GSM253289 |
| arrayexpress | EBI ArrayExpress [^4] | arrayexpress:E-MEXP-1008 |
| cellosaurus      | Cellosaurus - a knowledge resource on cell lines [^5]| cellosaurus:CVCL_1650 |
| Uberon | Uberon Anatomical Ontology [^6] |UBERON:0000992|

#### Private filters

Since some classifications cannot directly be referenced, and in accordance with
the upcoming Beacon v2 concept of "private filters", Progenetix uses
additionally a set of structured non-CURIE identifiers.

| Filter prefix        |  Code/Ontology          | Example  |
| ------------- |:-------------:| ----- |
| icdom | ICD-O 3[^7] Morphologies (Progenetix)| icdom-81703 |
| icdot | ICD-O 3[^7] Topographies(Progenetix)| icdot-C04.9 |
| TCGA  | The Cancer Genome Atlas (Progenetix)[^8] | TCGA-000002fc-53a0-420e-b2aa-a40a358bba37 |
| cBP      | cBioPortal[^9] | cBP-MSK_IMPACT_2017 |
| pgxcohort  | Progenetix cohorts [^10]| pgxcohort-arraymap |


### Handling of hierarchical terminologies

Hierarchical terminologies allow queries at different levels, to include all its children terms. The Progenetix query filter system adopts this inclusion logic if the classification / code type is hierarchy-based.

Examples for codes with hierarchical treatment within the filter space are:

* NCIt
  - true, deep hierarchical ontology of cancer classifications
* Cellosaurus
  - derived cell lines are also accessible through the code of their parental line

----

[^1]: National Cancer Institute Thesaurus Neoplasm [NCIt Neoplasm](https://bioportal.bioontology.org/ontologies/NCIT_NEOPLASM)
[^2]: Human phenotype ontology [HPO](https://hpo.jax.org)
[^3]: Supported identifiers include platforms(GPL), series(GSE) and samples(GSM).[GEO Overview](https://www.ncbi.nlm.nih.gov/geo/info/overview.html)
[^4]: Supports ArrayExpress Accession ID. [ArrayExpress browse](https://www.ebi.ac.uk/arrayexpress/browse.html)
[^5]: [Cellosaurus](https://web.expasy.org/cellosaurus/) accession ID.
[^6]: [Uberon](http://uberon.github.io/about.html) ID
[^7]:International Classification of Diseases for Oncology, 3rd Edition [ICD-O-3](https://www.who.int/standards/classifications/other-classifications/international-classification-of-diseases-for-oncology)
[^8]: Supports [TCGA](https://portal.gdc.cancer.gov) Sample UUID.
[^9]: Supports [cBioPortal](https://www.cbioportal.org/datasets) Study ID.
[^10]: Cohorts defined in Progenetix involving a collection of related samples. Currently includes (add `pgxcohort-`): arraymap, 2021progenetix, DIPG, TCGA, TCGAcancers, [gao2021signatures](https://progenetix.org/progenetix-cohorts/gao-2021-signatures/).
