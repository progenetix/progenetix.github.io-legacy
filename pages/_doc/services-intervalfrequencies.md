---
title: "Services: IntervalFrequencies"
layout: default
permalink: /doc/services/intervalfrequencies.html
www_link:
excerpt_separator: <!--more-->
date: 2021-05-06
category:
  - documentation
tags:
  - API
  - documentation
  - Beacon
  - bycon
  - Python
  - services
---

## {{ page.title }}
{:.no_toc}

This service provides access to binned CNV frequency information of data
"collations" in the Progenetix project databases. A typical use would be the
retrieval of data for a single collation, e.g. by its identifier (e.g.
`NCIT:C7376`, `PMID:22824167`, `pgxcohort-TCGAcancers`).

<!--more-->

----
**Contents**
* TOC
{:toc}
----

#### Identify existing collations for frequency maps retrieval

The complete set of all collation codes can be retrieved through

* <https://progenetix.org/services/collations?method=counts>
  - JSON
* <https://progenetix.org/services/collations?filters=NCIT&method=counts&output=text>
  - simple text table, here filtered for the `NCIT` prefix


```
id  label count w/ children direct count
NCIT:C3262	Neoplasm	116232	0
NCIT:C156482	Genitourinary System Neoplasm	16410	0
NCIT:C4893	Benign Urinary System Neoplasm	93	0
NCIT:C159209	Kidney Leiomyoma	1	1
NCIT:C4526	Kidney Oncocytoma	85	85
...
```

### Response Types

#### Download `.pgxseg` files

`.pgxseg` files are tab-delimited, columnar text files where each line provides
information about features or measurements associated with a genomic region.
More information can be found on the [file formats page](/doc/fileformats.html).

#### Stream JSON data

JSON formatting is provided in a Beacon v2 response, inside the `response.results`
array. Each frequency set is provided as object, with the single bin frequencies
in `interval_frequencies`. For more information see the [beaconresponse json](/doc/beaconresponse-json.html) documentation.

For the usual "single frequency set" use case this would result in a possible
direct access to the frequecy list at `response.results[0].interval_frequencies`.

```
{
  "meta": {
    ...
  },
  "response": {
    "error": {
      "error_code": 200,
      "error_message": ""
    },
    "exists": true,
    "numTotalResults": 1,
    "results": [
      {
        "dataset_id": "progenetix",
        "id": "pgxcohort-TCGAcancers",
        "interval_frequencies": [
          {
            "reference_name": "1",
            "end": 1000000,
            "gain_frequency": 0,
            "index": 0,
            "loss_frequency": 0,
            "start": 0
          },
          {
            "reference_name": "1",
            "end": 2000000,
            "gain_frequency": 0,
            "index": 1,
            "loss_frequency": 0,
            "start": 1000000
          },
```

### Parameters

#### `id`

* standard parameter to retrieve a frequency set by its `id`
* available values can be looked up using the [`collations`](collations.md)
service:
  - <https://progenetix.org/services/collations?method=ids&filters=NCIT&datasetIds=progenetix>
* an `id` value will override any given `filters`

#### `filters`

* a single or a comma-concatenated list of identifiers

#### `intervalType`

* not implemented
* default use is 1Mb, i.e. megabase binning (with diverging size for each
chromosome's q-terminal interval)

#### `method`

The method parameter here can set set output format. Options are:

* not set ...
  - standard JSON response
* `output=pgxseg`
  - Proggenetix `.pgxseg` columnar format, with a line for each interval and gain, loss frequencies
* `output=pgxmatrix`
  - Proggenetix `.pgxmatrix` matrix format, with a line for each frequency set and interval frequencies provided in the columns (i.e. usually first all gain frequencies, then all loss frequencies)
  - makes sense for multiple frequency sets, e.g. for clustering

#### Examples

* <https://progenetix.org/services/intervalFrequencies/?id=pgxcohort-TCGAcancers>
* <https://progenetix.org/services/intervalFrequencies/?filters=NCIT:C7376,PMID:22824167>
* <https://progenetix.org/services/intervalFrequencies/?output=pgxseg&filters=NCIT:C7376,PMID:22824167>
* <https://progenetix.org/services/intervalFrequencies/?output=pgxmatrix&filters=NCIT:C7376,PMID:22824167>
