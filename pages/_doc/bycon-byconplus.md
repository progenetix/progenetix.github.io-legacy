---
title: "Bycon: byconplus Beacon Server"
layout: default
permalink: /doc/bycon/byconplus.html
www_link: https://github.com/progenetix/bycon
excerpt_separator: <!--more-->
date: 2020-10-20
category:
  - API
tags:
  - code
  - API
  - documentation
  - Beacon
  - bycon
  - Python
  - Bycon
  - .featured
---

## Bycon - a Python-based environment for the Beacon v2 genomics API

The __bycon__ project provides implementation of middleware & server for the
[Beacon API](https://beacon-project.io), for use with the _Progenetix_ (i.e. GA4GH object model derived, _MongoDB_ implemented) environment. In this project, the
`byconplus.py` application and its libraries provide the necessary functionality
to run a Beacon instance, provided the given environment.

Future versions will add methods to set-up necessary database structures from
various variant and metadata files. Please [contact](mailto:contact@progenetix.org)
us for further information.

<!--more-->

* [Documentation Link](https://github.com/progenetix/bycon/blob/master/bycon/doc/byconplus.md)
* [Source Link](https://github.com/progenetix/bycon/blob/master/bycon/byconplus.py)

##### Examples

* standard test deletion CNV query
  - <https://bycon.progenetix.org/query?datasetIds=arraymap&assemblyId=GRCh38&includeDatasetResponses=ALL&requestType=variantCNVrequest&referenceName=9&variantType=DEL&start=20000000&start=21975097&end=21967753&end=23000000&filters=icdom-94403>
  - <https://bycon.progenetix.org/query?datasetIds=arraymap,progenetix&assemblyId=GRCh38&includeDatasetResponses=ALL&requestType=variantCNVrequest&referenceName=9&variantType=DEL&start=18000000&start=21975097&end=21967753&end=26000000&filters=icdom-94403>
* retrieving biosamples w/ a given filter code
  - <https://bycon.progenetix.org/query?assemblyId=GRCh38&datasetIds=arraymap,progenetix&filters=NCIT:C3326>
* beacon info (i.e. missing parameters return the info)
  - <https://bycon.progenetix.org>
* beacon info (i.e. specific request)
  - <https://bycon.progenetix.org/service-info/>
* precise variant query together with filter
  - <https://bycon.progenetix.org/query?datasetIds=dipg&assemblyId=GRCh38&requestType=variantAlleleRequest&start=7577120&referenceBases=G&alternateBases=A&filters=icdot-C71.7>

##### Examples for v2 endpoints

* `/filtering_terms`
  - <https://bycon.progenetix.org/filtering_terms/>
  - <https://bycon.progenetix.org/filtering_terms?prefixes=PMID>
  - <https://bycon.progenetix.org/filtering_terms?prefixes=NCIT,icdom>
  - <https://bycon.progenetix.org/filtering_terms?prefixes=NCIT,icdom,icdot&datasetIds=dipg>
* `/biosamples/{id}`
  - <https://bycon.progenetix.org/biosamples/PGX_AM_BS_HNSCC-GSF-an-10394?datasetIds=progenetix>
  - this will return an object `biosamples.{datasetid(s)}` where containing list(s) of
  the biosamples data objects (the multi-dataset approach seems strange here but
  in the case of progenetix & arraymap could in some cases make sense ...)

```
{
  "biosamples": {
    "progenetix": [
      {
        "id": "PGX_AM_BS_HNSCC-GSF-an-10394",
        "individual_id": "PGX_IND_HNSCC-GSF-an-10394",
        "age_at_collection": { "age": "P50Y" },
        "biocharacteristics": [
          {
            "type" : { "id" : "icdot-C10.9", "label" : "Oropharynx" }
          },
          {
            "type" : { "id" : "icdom-80703", "label" : "Squamous cell carcinoma, NOS" }
          },
          {
            "type" : { "id" : "NCIT:C8181", "label" : "Oropharyngeal Squamous Cell Carcinoma" }
          }
        ],
        "geo_provenance" : {
          "label" : "Oberschleissheim, Germany",
          "precision" : "city",
          "city" : "Oberschleissheim",
          "country" : "Germany",
          "latitude" : 48.25,
          "longitude" : 11.56
        },
        ...
```
* `/biosamples/{id}/g_variants`
  - <https://bycon.progenetix.org/biosamples/PGX_AM_BS_HNSCC-GSF-an-10394/g_variants?datasetIds=progenetix>
* `/g_variants?{query}`  
  - <https://beacon.progenetix.org/cgi/bycon/bycon/byconplus.py/g_variants?requestType=variantRangeRequest&datasetIds=arraymap&assemblyId=GRCh38&includeDatasetResponses=ALL&referenceName=9&variantType=DEL&start=20000000&end=22000000&filters=icdom-94403>
  - <https://bycon.progenetix.org/g_variants?datasetIds=arraymap&assemblyId=GRCh38&includeDatasetResponses=ALL&referenceName=9&variantType=DEL&start=21500000&start=21975097&end=21967753&end=22500000&filters=icdom-94403>
* `/g_variants/{id}`    
  - Since the _Progenetix_ framework treats all variant instances individually
  and an `id` parameter should be unique, variants are grouped as "equivalent"
  using the "digest" parameter. Remapping of the positional "id" argument to `digest`
  is handled internally.
  - <https://bycon.progenetix.org/g_variants/DIPG_V_MAF_17_7577121_G_A?datasetIds=dipg>
* `/g_variants/{id}/biosamples`
  - As above, but responding with the `biosamples` data.
  - <https://bycon.progenetix.org/g_variants/DIPG_V_MAF_17_7577121_G_A/biosamples?datasetIds=dipg>

##### Custom (yet)

* `/get-datasetids/`
  - dataset retrieval
  - <https://bycon.progenetix.org/get-datasetids/>
```
{
    "datasets": [
        { "id": "arraymap", "name": "arraymap" },
        { "id": "progenetix", "name": "progenetix" ...
```
* sample retrieval like "id" query by endpoint
  - This type of query emulates the endpoint based queries above through the parameters
    * `scope`
    * `id`
    * `response`
    Only providing `scope` or `response` without `id` will only work if other valid
    query parameters are provided.
  - <https://bycon.progenetix.org?id=PGX_AM_BS_GSM253289&datasetIds=arraymap&scope=biosamples>
  - <https://bycon.progenetix.org?id=PGX_AM_BS_GSM253289&datasetIds=arraymap&scope=biosamples&response=g_variants>
