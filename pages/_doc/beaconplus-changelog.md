---
title:  "BeaconPlus and Site Changes"
layout: default
date: 2022-01-10
permalink: /beaconplus-changelog.html
excerpt_separator: <!--more-->
category:
  - doc
  - news
tags:
  - API
  - documentation
  - Beacon
  - Beacon_v2
  - services
  - .featured
---

## {{ page.title }}

This page lists changes for the [Beacon+](http://beacon.progenetix.org/ui/)
implementation of the ["Beacon" genomics API](http://beacon-project.io), as well
as related updates for the [Progenetix](http://progenetix.org) front-end.


#### 2022-01-10: BUG FIX Frequency Maps

Pre-computed Progenetix CNV frequency histograms (e.g. for NCIT codes) are based
samples from all child terms; e.g. `NCIT:C3262` will display an overview of all
neoplasias, although no single case has this specific code.

However, there had been a bu when under specific circumstances (code has some
mapped samples and code has more samples in child terms) only the direct matches
were used to compute the frequencies although the full number of samples was indicated
in the plot legend. FIXED.

#### 2021-11-25: Publication page fix

* The publication details pages did not display content due to the changed Beacon response structure. Fixed.

#### 2021-04-30: Closing in on Beacon v2

As one of the drivers of the Beacon protocol and to drive the Beacon v2 protocol
process we have now started the documentation of Beacon v2 endpoints which
are supported in Progenetix as part of the [**implementations-v2**](https://github.com/ga4gh-beacon/implementations-v2/blob/main/index.md)
project:

* [documentation source](https://github.com/ga4gh-beacon/implementations-v2/blob/main/progenetix-examples.md)
* same as [web page](https://beacon-project.io/implementations-v2/progenetix-examples.html)

<!--more-->

#### 2020-10-01: Moving to `bycon` powered BeaconPlus

We've changed the Beacon backend to the `bycon` code base. The new project's
codebase is accessible through the [`bycon`](http://github.com/progenetix/bycon/)
project. Contributions welcome!

~~#### 2019-09-30: Using the `BeaconAlleleResponses` parameter~~

So far the Beacon+ implementation did not make use of the `BeaconAlleleResponses`
parameter though it is required by the protocol, but instad always interpreted
requests as with the `ALL` parameter.

##### Changes

* UI offers selector for `BeaconAlleleResponses` options
* UI now allows selection of multiple datasets
* API follows Beacon protocol in `BeaconAlleleResponses` interpretation

##### Example

<https://beacon.progenetix.org/cgi/bycon/beaconServer/byconplus.py?referenceBases=G&alternateBases=A&datasetIds=progenetix&assemblyId=GRCh38&referenceName=17&filterLogic=AND&start=7577120&filters=pgxcohort-DIPG>
