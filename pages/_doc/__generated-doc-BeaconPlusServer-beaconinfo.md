---
title: "beaconinfo.cgi Perl Code Documentation"
layout: default
www_link: 
excerpt_separator: <!--more-->
date: 2020-10-21
category:
  - howto
tags:
  - code
  - documentation
  - Beacon
  - Perl
  - BeaconPlusServer
---

## {{ page.title }}

<!--more-->


The "beaconinfo.cgi" server application serves tw main functions

1. Called w/o parameters, it will return a standard Beacon information object.
2. Provided with
    - `datasetIds` (optional)
    - `querytext`
    - `querytype` (optional)
it will return information about the matched identifiers from the collection(s)
selected through `datasetIds`.

The counts for the collections (`variants`, `biosamples` etc.) of the different
datasets are retrieved from the daily updated `progenetix.dbstats` collection.

For the non-parametrized call of the application, just the basic information
including variant counts is returned.


If the request contains an "ontologies" or "details" keyword, information about 
the existing ontologies are provided, per dataset.

TODO: This may either be deprecated (since an alternative exists in `/api/`),
or be specified more clearly in the future, depending also on the development
of the Beacon v2 "filters" concept.

