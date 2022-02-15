---
title: "Beacon: Biosamples"
layout: default
permalink: /doc/beacon/biosamples.html
www_link: https://github.com/progenetix/bycon
excerpt_separator: <!--more-->
date: 2021-04-16
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

* [Documentation Link](https://github.com/progenetix/bycon/blob/master/beaconServer/doc/biosamples.md)
* [Source Link](https://github.com/progenetix/bycon/blob/master/beaconServer/biosamples.py)

This endpoint is mostly aimed at providing _biosamples_ handover functionality.
However, the app uses the same query processing mechanism as the main _byconplus_
application.

<!--more-->

##### Examples

* <https://progenetix.org/beacon/biosamples/?filters=icdom-81703&datasetIds=progenetix>
* <https://progenetix.org/beacon/biosamples/?filters=icdom-81703&datasetIds=progenetix&responseFormat=simple>
* <https://progenetix.org/beacon/biosamples/?filters=icdom-81703&datasetIds=progenetix&responseFormat=simple&method=callsetstats&output=text>
* <http://progenetix.org/beacon/biosamples?datasetIds=progenetix&assemblyId=GRCh38&includeDatasetResonses=ALL&requestType=null&referenceName=null&filterLogic=OR&filters=NCIT:C7376&filters=NCIT:C45665&filters=NCIT:C45655&filters=NCIT:C45655>
