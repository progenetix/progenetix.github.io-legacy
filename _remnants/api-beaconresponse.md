---
title: "API: Beacon-style JSON response"
date: 2021-05-05
layout: default
author: "@mbaudis"
permalink: "/doc/beaconresponse-json.html"
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:
category:
  - documentation
  - news
tags:
  - Beacon
  - Progenetix
  - news
  - files
  - API
  - JSON
---

## {{ page.title }}
{:.no_toc}

The Progenetix resource's API utilizes the `bycon` framework for data query and
delivery and basically represents a custom implementation of the Beacon API.

<!--more-->

The standard format for JSON responses corresponds to a generic Beacon v2
response, with the `meta` and `response` root elements.

For most practical purposes when accessing the [Beacon-style API endpoints](/doc/beacon/paths.html)
one just sould be aware that the returned data is:

* contained in the `results` array
* that this is true for single objects, which then would be `results[0]`

Additionally, most API responses (e.g. for biosamples or variants) provide access
to data using _handover_ objects.

#### Example JSON response (partial)

**Subjecct to change** - the Beacon v2 response is currently being modified,
with the removal of the `response` root element and replacement by specific
response modules.

```
{
  "meta": {
    "api_version": "2.0.0-draft.3",
    "beacon_id": "org.progenetix.beacon",
    "create_date_time": "2015-11-13",
    "info": "The main biosamples payload can be accessed in `results`.\n",
    "received_request": {
      "dataset": "progenetix",
      "dataset_ids": [
        "progenetix"
      ],
      "filters": [
        "cellosaurus:CVCL_0004"
      ],
      "method": "details",
      "variant_pars": {
        "assemblyId": "GRCh38"
      }
    },
    "returned_schemas": "https://progenetix.org/services/schemas/Biosample/",
    "update_date_time": "2021-03-23",
    "warnings": []
  },
  "response": {
    "beacon_handover": [],
    "error": {
      "error_code": 200,
      "error_message": ""
    },
    "exists": true,
    "info": {
      "counts": {
        "sampleCount": 13
      },
      "database_queries": {
        "biosamples": {
          "$or": [
            {
              "external_references.id": "cellosaurus:CVCL_0004"
            },
            {
              "external_references.id": "cellosaurus:CVCL_3827"
            }
          ]
        }
      }
    },
    "numTotalResults": 13,
    "results": [
      {
        "_id": "5c865fc909d374f2dc35989c",
        "biocharacteristics": [
          {
            "id": "UBERON:0002371",
            "label": "bone marrow"
          },
          {
            "id": "icdot-C42.1",
            "label": "Bone marrow"
          },
          {
            "id": "icdom-98753",
            "label": "Chronic myelogenous leukemia, BCR-ABL positive"
          },
          {
            "id": "NCIT:C3174",
            "label": "Chronic Myelogenous Leukemia, BCR-ABL1 Positive"
          }
        ],
        "cohorts": [
          {
            "id": "pgxcohort-2021progenetix",
            "label": "Version at Progenetix Update 2021"
          }
        ],
        "data_use_conditions": {
          "id": "DUO:0000004",
          "label": "no restriction"
        },
        "description": "Chronic myelogenous leukemia [cell line K-562]",
        "external_references": [
          {
            "description": "pubmed",
            "id": "PMID:16001072",
            "label": "Garraway LA, Widlund HR, Rubin MA, Getz G, Berger et al. (2005): Integrative genomic analyses identify MITF as a lineage survival oncogene amplified in malignant melanoma."
          },
          {
            "description": "geo:gpl",
            "id": "geo:GPL2014",
            "label": ""
          },
          {
            "description": "geo:gse",
            "id": "geo:GSE2520",
            "label": ""
          },
          {
            "description": "cellosaurus",
            "id": "cellosaurus:CVCL_0004",
            "label": ""
          },
          {
            "description": "geo:gsm",
            "id": "geo:GSM50195",
            "label": ""
          }
        ],
        "histological_diagnosis": {
          "id": "NCIT:C3174",
          "label": "Chronic Myelogenous Leukemia, BCR-ABL1 Positive"
        },
        "id": "pgxbs-kftvipwj",
        "individual_id": "pgxind-kftx4fwb",
        "info": {
          "callset_ids": [
            "pgxcs-kftwaf7q"
          ],
          "cnvstatistics": {
            "cnvcoverage": 1625391458,
            "cnvfraction": 0.565,
            "delcoverage": 617302858,
            "delfraction": 0.215,
            "dupcoverage": 1008088600,
            "dupfraction": 0.351
          },
          "legacy_id": [
            "PGX_AM_BS_GSM50195"
          ],
          "provenance": "arraymap import"
        },
        "provenance": {
          "geo_location": {
            "geometry": {
              "coordinates": [
                -71.06,
                42.36
              ],
              "type": "Point"
            },
            "properties": {
              "ISO3166alpha3": "USA",
              "city": "Boston",
              "country": "United States of America",
              "label": "Boston, United States",
              "latitude": 42.36,
              "longitude": -71.06,
              "precision": "city"
            },
            "type": "Feature"
          },
          "material": {
            "description": "Chronic myelogenous leukemia [cell line K-562]",
            "id": "EFO:0009656",
            "label": "neoplastic sample"
          }
        },
        "sampled_tissue": {
          "id": "UBERON:0002371",
          "label": "bone marrow"
        },
        "updated": "2020-09-10 17:45:36.501000"
      },
      {
        "_id": "5c865fcb09d374f2dc3598dc",
        "biocharacteristics": [
          {
            "id": "UBERON:0002371",
            "label": "bone marrow"
          },
          {
            "id": "icdot-C42.1",
            "label": "Bone marrow"
          },
...
```
