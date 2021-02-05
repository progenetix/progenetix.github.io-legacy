---
title: "Progenetix Source Code"
layout: default
permalink: /doc/code/progenetix-repositories.html
www_link: https://github.com/progenetix/bycon
excerpt_separator: <!--more-->
date: 2021-02-06
category:
  - API
tags:
  - code
  - API
  - documentation
  - Beacon
  - bycon
  - Python
  - Perl
  - React
  - Bycon
  - services
---

## {{ page.title }}

With exception of some utility scripts and external dependencies (e.g. [MongoDB](https://www.mongodb.com/try/download/community)) the following projects provide the vast majority of the software (from database interaction to website) behind Progenetix and Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span>.

* [`bycon`](https://github.com/progenetix/bycon)
  - Python based service based on the [GA4GH Beacon protocol](http://beacon-project.io)
  - software powering the Progenetix resource
  - [Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span>](http://beacon.progenetix.org/ui/) implementation(s) use the same code base
* [`progenetix-next`](https://github.com/progenetix/progenetix-next)
  - website for Progenetix and its Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span> implementations
  - provides Beacon interfaces for the `bycon` server, as well as other Progenetix sevices (e.g. the [publications](http://progenetix.org/publications/) repository)
  - implemented as [React](https://reactjs.org) / [Next.js](https://nextjs.org) project
* [`PGX`](https://github.com/progenetix/PGX)
  - a Perl ibrary providing utility functions for Progenetix CNV data
  - used for data transformation, e.g. binning of segmental CNV data
  - main purpose now in providing the various plots (CNV histograms, clusterd CNV profiles, array plots)

### Additional Projects

* [`schemas`](https://github.com/progenetix/schemas)
  - Progenetix data schemas
  - represent an accessible/stable version of the schemas used in [`bycon`](https://github.com/progenetix/bycon)
* [`icdot2uberon`](https://github.com/progenetix/icdot2uberon)
  - mappings between ICD-O 3 topographies and UBERON anatomical sites
* [`ICDOntologies`](https://github.com/progenetix/ICDOntologies)
  - mappings between ICD-O 3 morphology / topography pairs and NCIt neoplasm core
  cancer ontology
