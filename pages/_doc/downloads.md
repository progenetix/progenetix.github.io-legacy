---
title: "Data Downloads"
date: 2021-10-01
layout: default
author: "@mbaudis"
permalink: "/doc/downloads.html"
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:
category:
  - documentation
tags:
  - Progenetix
  - news
  - files
  - API
  - JSON
  - downloads
---

## {{ page.title }}
{:.no_toc}

Progenetix data is licenced under CC-BY 4.0 and can be freely downloaded for
research and commercial purposes, with the stipulation of proper acknowledgement.

The data is provided eiher as JSON or tab-delimited text files, depending on the
type of data. For several purposes both options are available.

<!--more-->

----
**Contents**
* TOC
{:toc}
----

### Downloads using the GUI

<img src="/assets/img/histogram-new-options.png" style="margin-left: auto; margin-right:auto" />

Inseveral places throughout the sample and subset pages one can find links
for the download of e.g. data returned from sample searches. The example above
shows the standard link for the CNV frequency file corresponding to the
histogram data.

### Downloads using the API

The Progenetix resource utilizes the Beacon v2 API for data delivery. Some
information about the standard paths & their usage can be found on the
[Beacon v2 path examples page](/doc/beacon/paths.html). Below are the examples
for the main direct data access scenarios.

#### Download CNV segments for a given collation (diagnosis, study...)

The different filter options are described on the [**Filter Documentation**](/doc/filters-documentation.html)
page.

* Constructor: `progenetix.org/beacon/variants/?filters=___ID___&output=___method___`
~~* it is highly recommended to use `&method=callsetsvariants` for any download of
more-than-a-few samples; this will start to stream the variants instead of pre-fetching them (which may time out the server)~~
* Examples:
  - [progenetix.org/beacon/variants/?filters=icdom-85002](http://progenetix.org/beacon/biosamples/?filters=icdom-85002)
  - [progenetix.org/beacon/variants/?filters=icdom-85002&output=pgxseg](http://progenetix.org/beacon/biosamples/?filters=icdom-85002&output=pgxseg)


#### Download tabular data through the API

Especially for biosamples it may make sense just to get the data in a tabular
format using the `output=datatable` option.

For use cases where one e.g. just needs the identifiers of a given object, e.g.
to intersect the query results with a previously accessed master table, the
`output=idtable` format can be used.

##### Examples:

* <http://progenetix.org/beacon/biosamples/?filters=NCIT:C6563&output=datatable>
* <http://progenetix.org/beacon/biosamples/?filters=NCIT:C3267&output=idtable>


#### Custom Progenetix services

The Progenetix API implements a number of ["services"](/doc/services/services.html)
which can e.g. be utilized to download aggregate data such as CNV frequency data
of a disease entity.


### File formats

#### Beacon-style JSON

With the maturation of the Beacon v2 protocol and associated data schemas,
the default delivery of JSON encoded data follows the standard Beacon response
format where the main data is contained in the `results` array.

For more information see the [beaconresponse json](/doc/beaconresponse-json.html)
documentation.

#### Columnar data files

##### `.pgxseg` segment data

`.pgxseg` files are tab-delimited, columnar text files where each line provides
information about features or measurements associated with a genomic region.
More information can be found on the [file formats page](/doc/fileformats.html).

##### `.pgxmatrix` data matrices

`.pgxmatrix` files are tab-delimited, columnar data matrix files where each line
provides interval-mapped values, usually e.g. for 1Mb genomic intervals of a
sample or classification. More information can be found on the [file formats page](/doc/fileformats.html).
