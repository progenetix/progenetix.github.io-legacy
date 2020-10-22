---
title: "Previous API Examples (Deprecated)"
date: 2018-07-20
layout: default
author: Michael
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:   # use this for a quoted, complete HTML link with label '<a href="http://" target="_blank">...</a>'
category:
  - howto      # publication howto presentation
tags: 
  - .stale
---

## {{ page.title }}

<!--more-->

### Graphics

#### Gain/loss frequency chromosomal ideogram


```
http://progenetix.org/api?db=progenetix&collection=samples&api_out=ideogram&icdm_m=8144/3,8140/0
```
* ... produces a chromosomal ideogram (*api_out=ideogram*) with gain/loss frequencies, for cancer samples with ICD-O codes 8144/3 and 8140/0 (*icdm_m=8144/3,8140/0*) selected from the progenetix database (*db=progenetix*)

#### Gain/loss frequency histogram

```
http://arraymap.org/api/?db=arraymap&collection=samples&api_out=histogram&icdt_m=c18,c20&randno=100
```
* This query will produce a histogram of regional gain/loss frequencies in samples matching the loci *icdt_m=c18,c20* (e.g. c189 - large intestine ..., c181 - appendix & c187 - sigmoid ...) and "c20" (rectum) from arrayMap (*db=arraymap*). Also, the query will return only 100 random samples (*randno=100*) out of all matches.

<figure style="clear: both;text-align: center; width: 100%">
   <img  style="margin-left: auto; margin-right: auto;" src="http://arraymap.org/api/?db=arraymap&collection=samples&api_out=histogram&icdt_m=c18,c20&randno=100" alt="histogram.png" />
   <figcaption>Example histogram of cancer genome imbalances in 100 random colorectal carcinomas, directly generated from the API call shown</figcaption>
</figure>

```
http://arraymap.org/api/?db=arraymap&collection=samples&api_out=histogram&icdm_m=0000&anysegmaxkb=10000&randno=1000&maxy=25&laby_m=0,7.5,15,22.5
```
* This query will produce a histogram for the frequency of germline CNVs, based on 1000 random reference arrays from the arrayMap collection. As a simple quality filter, only arrays are considered which lack any single segment >10Mb (which would be pretty much a marker for somatic changes or pathologic germline variants, though [we found once a >10MB segment w/o apparent phenotype](http://www.ncbi.nlm.nih.gov/pubmed?term=18698619) ourselves.

#### Geographic map of publications

```
http://www.progenetix.org/api/?imgw=1024&api_out=pubmap&locscale=1&api_scope=publications&mapcaption=1
```
* A geographic map of all publications registered in the Progenetix publication database, with locations derived (mostly) from the corresponding authors' institutions, and marker sizes corresponding to the number of samples reported from there.


### Data/Text

#### Called CNA segments from selected samples =api_out=segments=

```
http://progenetix.org/api/?db=progenetix&collection=samples&api_out=segments&text_m=metast&icdm_m=8500/3
```
* The *api_out=segments* returns a list of CNA segments from infiltrating duct carcinoma samples (*icdm_m=8500/3*) with a "metast" word stem match (*text_m=metast*), e.g. having "metastasis" or "metastasised" somewhere in their annotations. As the list shows, these are only very few out of the expected number of samples ...

#### Tab-delimited data table from selected samples =api_out=samples=

```
http://arraymap.org/api/?db=arraymap&api_out=samples&icdm_m=81&exportk_m=UID,DIAGNOSISTEXT,ICDMORPHOLOGY,ICDMORPHOLOGYCODE,ICDTOPOGRAPHY,ICDTOPOGRAPHYCODE,GRADE,TNM,DEATH,FOLLOWUP&randno=200
```
* ... results in a tab-delimited table with columns representing the comma-concatenated __exportk_m__ parameters, from 200 (__randno=200__) adenocarcinomas and -adenomas (__icdm_m=81__) of various histologies

#### JSON data file from selected samples =api_out=samples&api_doctype=json=

```
http://progenetix.org/api/?db=progenetix&api_out=samples&api_doctype=json&icdm_m=817&randno=20
```
* ... results in a JSON data file, a wrapper containing the calling information and the =data[]= attribute with sample objects inside


#### Sample count =api_out=count&api_doctype=json=

```
http://arraymap.org/api/?db=arraymap&api_out=count&genome=hg19&api_doctype=json&icdm_m=8,9&locus_m=17:7512444-7531593:-1
```
* ... results in json data structure (__api_doctype=json__) containing the call information as well as the count of *all* neoplasias (__icdm_m=8,9__) with a deletion overlapping the TP53 CDR (__locus_m=17:7512444-7531593:-1__). Avoiding the json specification will just return the number of hits:

```
http://arraymap.org/api/?db=arraymap&api_out=count&genome=hg19&icdm_m=8,9&locus_m=17:7512444-7531593:-1
```

#### ICD morphology list =api_out=icdmlist&text_m=breast=

This example uses a text match to list all ICD morphologies having samples with a match in any annotation field.

```
http://arraymap.org/api/?project=progenetix&genome=hg18&db=progenetix&text_m=breast&api_out=icdmlist
```

Looking up all ICD morphologies with samples in colon or rectum (C189 and C20):

```
http://progenetix.org/api/?api_out=icdmlist&icdt_m=189,20&db=arraymap
```

Looking up all publications for sample numbers and geographic data:

```
http://progenetix.org/qmongo/?db=progenetix&collection=publications&all=multvalues&afqfield=PMID&querytext=...&exportk_m=PMID,NO_ACGH,NO_WES,NO_WGS,CITY,COUNTRY&sortby=COUNTRY&counter=y
```
