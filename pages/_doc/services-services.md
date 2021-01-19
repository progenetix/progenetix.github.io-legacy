---
title: "Bycon Services"
layout: default
permalink: /doc/services/services.html
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
  - services
  - .featured
---

## {{ page.title }}

The _bycon_ environment provides a number of data services which make use of
resources in the _Progenetix_ environment. Please refer to their specific
documentation.

* [_biosamples_](/doc/services/biosamples.html)
* [_collations_](/doc/services/collations.html)
* [_cytomapper_](/doc/services/cytomapper.html)
* [_deliveries_](/doc/services/deliveries.html)
* [_genespans_](/doc/services/genespans.html)
* [_geolocations_](/doc/services/geolocations.html)
* [_ids_](/doc/services/ids.html)
* [_ontologymaps_](/doc/services/ontologymaps.html)
* [_publications_](/doc/services/publications.html)
* [_schemas_](/doc/services/schemas.html)

### `services.py` and URL Mapping

The service URL format `progenetix.org/services/__service-name__?parameter=value`
is a shorthand for `progenetix.org/cgi-bin/bycon/services/__service-name__.py?parameter=value`.

<!--more-->

The `services` application deparses a request URI and calls the respective
script. The functionality is combined with the correct configuration of a
rewrite in the server configuration:

```
RewriteRule     "^/services(.*)"     /cgi-bin/bycon/services/services.py$1      [PT]
```

### Callback handling

The JSON response (see below) will be wrapped in a callback function if a `callback`
parameter is provided e.g. for Ajax functionality.

* <http://progenetix.org/services/collations?filters=PMID&datasetIds=progenetix&method=counts&callback=4445-9938-cbat-9891-kllt>

### Response formats (changed January 2021)

Standard responses are provided as `Content-Type: application/json`. The wrapper
format, as defined in the schemas (https://github.com/progenetix/bycon/tree/master/services/config/schemas`) 
provides a `response` root parameter with a default `results` list item:

```
response_object_schema:
  parameters: { }
  data: { }
  errors: [ ]
  warnings: [ ]
```

This (incomplete) example response may help with understanding the general
format. Here, the data is a dictionary/object with a single key (`genes`):

##### Request  Example

* <https://progenetix.org/services/biosamples/?filters=icdom-81703&datasetIds=progenetix>

##### Response Example

```
{
  "meta": {
    "errors": [],
    "info": "The main biosamples payload can be accessed in `response.results`.\n",
    "parameters": [
      {
        "method": "details"
      },
      {
        "filters": [
          "icdom-81703"
        ]
      },
      {
        "variant_pars": {
          "assemblyId": "GRCh38"
        }
      },
      {
        "dataset": "progenetix"
      }
    ],
    "response_type": "return_biosamples",
    "returned_schemas": [
      "https://progenetix.org/services/schemas/Biosample/"
    ]
  },
  "response": {
    "exists": true,
    "info": {
      "count": 2020
    },
    "results": [
      {
        "biocharacteristics": [
          {
            "description": null,
            "id": "UBERON:0002107",
            "label": "liver"
          },
          {
            "description": null,
            "id": "icdot-C22.0",
            "label": "Liver"
          },
          {
            "description": null,
            "id": "icdom-81703",
            "label": "Hepatocellular carcinoma, NOS"
          },
          {
            "description": null,
            "id": "NCIT:C3099",
            "label": "Hepatocellular Carcinoma"
          }
        ],
        "description": "Hepatocellular carcinoma [chronic Hepatitis B]",
        "external_references": [
          {
            "description": null,
            "id": "PMID:8993981",
            "label": null
          }
        ],
        "id": "pgxbs-kftvgi2z",
        "info": {
          "callset_ids": [
            "pgxcs-kftvlys5"
          ],
          "cnvstatistics": {
            "cnvcoverage": 486794605,
            "cnvfraction": 0.161,
            "delcoverage": 256788224,
            "delfraction": 0.085,
            "dupcoverage": 233122824,
            "dupfraction": 0.077
          },
          "legacy_id": "PGX_AM_BS_HCC-1997-01"
        },
        "provenance": {
          "geo": {
            "ISO-3166-alpha3": "FRA",
            "city": "Paris",
            "country": "France",
            "geojson": {
              "coordinates": [
                2.35,
                48.85
              ],
              "type": "Point"
            },
            "label": "Paris, France",
            "latitude": 48.85,
            "longitude": 2.35,
            "precision": "city"
          },
          "material": {
            "description": null,
            "id": "EFO:0009656",
            "label": "neoplastic sample"
          }
        }
      },
      ...
```
<!--/podmd-->
