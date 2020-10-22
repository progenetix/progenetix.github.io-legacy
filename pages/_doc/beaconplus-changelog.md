---
title:  "BeaconPlus Changes"
layout: default
date: 2019-09-30
permalink: /beaconplus-changelog.html
excerpt_separator: <!--more-->
category:
  - doc
  - news
tags:
  - API
  - documentation
  - Beacon
---

## {{ page.title }}

This page lists changes for the [Beacon+](http://beacon.progenetix.org/ui/)
implementation of the ["Beacon" genomics API](http://beacon-project.io).

<!--more-->

#### 2020-10-01: Moving to `bycon` powered BeaconPlus

We've changed the Beacon backend to the `bycon` code base. The new project's
codebase is accessible through the [`bycon`](http://github.com/progenetix/bycon/)
project. Contributions welcome!

#### 2019-09-30: Using the `BeaconAlleleResponses` parameter

So far the Beacon+ implementation did not make use of the `BeaconAlleleResponses`
parameter though it is required by the protocol, but instad always interpreted
requests as with the `ALL` parameter.

##### Changes

* UI offers selector for `BeaconAlleleResponses` options
* UI now allows selection of multiple datasets
* API follows Beacon protocol in `BeaconAlleleResponses` interpretation

##### Example

<https://beacon.progenetix.org/cgi-bin/beaconresponse.cgi?datasetIds=tcga&datasetIds=dipg&datasetAlleleResponses=ALL&referenceName=17&assemblyId=GRCh38&start=7577121&referenceBases=G&alternateBases=A>
