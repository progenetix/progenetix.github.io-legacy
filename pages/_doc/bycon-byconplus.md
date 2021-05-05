---
title: "Bycon: byconplus Beacon Server"
layout: default
permalink: /doc/bycon/byconplus.html
www_link: https://github.com/progenetix/bycon
excerpt_separator: <!--more-->
date: 2021-04-16
category:
  - API
tags:
  - API
  - documentation
  - Beacon
  - bycon
  - Python
  - .featured
---

### Bycon - a Python-based environment for the Beacon v2 genomics API

The [`bycon`](https://github.com/progenetix/bycon) project provides a combination of a Beacon-protocol based API with additional API services, used as backend and middleware for the Progenetix resource.

`bycon` has been developed to support Beacon protocol development following earlier implementations of Beacon+ ("beaconPlus") with now deprected Perl libraries. The work tightly integrates with the [ELIXIR Beacon](http://beacon-project.io) project.

<!--more-->

##### Examples for v2 endpoints

**NOTE** The Beacon v2 endpoints are _currently_ implemented under
`https://progenetix.org/beacon/...`.

The examples for the v2 paths can now be found on the [paths page](/doc/beacon/paths.html).

For more information see the [beaconresponse json](/doc/beaconresponse-json.html)
documentation.

----

#### DEPRECATED v1+ and cutom test examples

* <https://beacon.progenetix.org/?datasetIds=progenetix&assemblyId=GRCh38&includeDatasetResponses=ALL&variantType=DUP&filterLogic=AND&geneSymbol=MYC&varMinLength=1000000&varMaxLength=3000000&filters=icdom-80463>

* `/get-datasetids/`
  - dataset retrieval
  - <https://bycon.progenetix.org/get-datasetids/>
```
{
    "datasets": [
        { "id": "progenetix", "name": "progenetix" ...
```
* sample retrieval like "id" query by endpoint
  - This type of query emulates the endpoint based queries above through the parameters
    * `scope`
    * `id`
    * `response`
    Only providing `scope` or `response` without `id` will only work if other valid
    query parameters are provided.
  - <https://bycon.progenetix.org?id=PGX_AM_BS_GSM253289&datasetIds=progenetix&scope=biosamples>
  - <https://bycon.progenetix.org?id=PGX_AM_BS_GSM253289&datasetIds=progenetix&scope=biosamples&response=g_variants>



The first examples are for "standard" Beacon (v1) queries and may become deprecated/remapped during the ongoing development.

* standard test deletion CNV queries (these may take a minute or so...)
  - <https://bycon.progenetix.org/query?datasetIds=progenetix&assemblyId=GRCh38&referenceName=9&variantType=DEL&start=20000000&start=21975097&end=21967753&end=23000000&filters=icdom-94403>
  - <https://bycon.progenetix.org/query?datasetIds=progenetix&assemblyId=GRCh38&referenceName=9&variantType=DEL&start=18000000&start=21975097&end=21967753&end=26000000&filters=icdom-94403>
* retrieving biosamples w/ a given filter code
  - <https://bycon.progenetix.org/query?assemblyId=GRCh38&datasetIds=progenetix&filters=NCIT:C3326>
* precise variant query together with filter
  - <https://bycon.progenetix.org/query?datasetIds=progenetix&assemblyId=GRCh38&start=7577120&referenceBases=G&alternateBases=A&filters=icdot-C71.7>
