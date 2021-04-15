---
title: "Progenetix Filter Documentation"
date: 2021-04-14
layout: default
author: "@qingyao"
permalink: "/doc/datadictionary.html"
excerpt_separator: <!--more-->
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
  - filters
---

## {{ page.title }}


<!--more-->

### List of ontology-based filters recognized by query endpoint ([CURIE](https://www.w3.org/TR/2010/NOTE-curie-20101216/) syntax is used whenever available)

#### Ontology with CURIE-based syntax

| CURIE prefix        |  Ontology          | Example (`;`- separated)  |
| ------------- |:-------------:| -----:|
| NCIT    | NCIt Neoplasm <sup>1</sup> | NCIT:C27676 |
| HP      | HPO<sup>2</sup> | HP:0012209 |
| PMID    | NCBI Pubmed ID | PMID:28966033 |
| geo   | NCBI Gene Expression Omnibus<sup>3</sup> | geo:GPL6504, geo:GSE19331, geo:GSM253289 |
| arrayexpress | EBI ArrayExpress <sup>4</sup> | arrayexpress:E-MEXP-1008 |
| cellosaurus      | Cellosaurus - a knowledge resource on cell lines <sup>5</sup>| cellosaurus:CVCL_1650 |
| Uberon | Uberon Anatomical Ontology <sup>6</sup> |UBERON:0000992|

<sup>1</sup>: National Cancer Institute Thesaurus Neoplasm [NCIt Neoplasm](https://bioportal.bioontology.org/ontologies/NCIT_NEOPLASM)
<sup>2</sup>: Human phenotype ontology [HPO](https://hpo.jax.org)
<sup>3</sup>: Supported identifiers include platforms(GPL), series(GSE) and samples(GSM).[GEO Overview](https://www.ncbi.nlm.nih.gov/geo/info/overview.html)
<sup>4</sup>: Supports ArrayExpress Accession ID. [ArrayExpress browse](https://www.ebi.ac.uk/arrayexpress/browse.html)
<sup>5</sup>: [Cellosaurus](https://web.expasy.org/cellosaurus/) accession ID.
<sup>6</sup>: [Uberon](http://uberon.github.io/about.html) ID

| Filter prefix        |  Ontology          | Example  |
| ------------- |:-------------:| -----:|
| icdom | ICD-O 3<sup>1</sup> Morphologies (Progenetix)| icdom-81703 |
| icdot | ICD-O 3<sup>1</sup> Topographies(Progenetix)| icdot-C04.9 |
| TCGA  | The Cancer Genome Atlas (Progenetix)<sup>2</sup> | TCGA-000002fc-53a0-420e-b2aa-a40a358bba37 |
| cBP      | cBioPortal<sup>3</sup> | cBP-MSK_IMPACT_2017 |
| pgxcohort  | Progenetix cohorts <sup>3</sup>| pgxcohort-arraymap |

<sup>1</sup>:International Classification of Diseases for Oncology, 3rd Edition [ICD-O-3](https://www.who.int/standards/classifications/other-classifications/international-classification-of-diseases-for-oncology)
<sup>2</sup>: Supports [TCGA](https://portal.gdc.cancer.gov) Sample UUID.
<sup>3</sup>: Supports [cBioPortal](https://www.cbioportal.org/datasets) Study ID.
<sup>4</sup>: Cohorts defined in Progenetix involving a collection of related samples. Currently includes: arraymap, 2021progenetix, DIPG, TCGA, TCGAcancers, gao2021signatures.

#### Note on multiple-hierarchical terminology
Hierarchical terminology allows queries at a high-level, generalized term to include all its children terms. The Progenetix query filter adopts this inclusion logic if the ontology is hierarchy-based. The hierarchical ontologies within the filter space:
* NCIt
* Cellosaurus
* icdot
