---
title: "query_params.yaml  Code Documentation"
layout: default
www_link: 
excerpt_separator: <!--more-->
date: 2020-10-21
category:
  - howto
tags:
  - code
  - documentation
  - Progenetix
  - API
  - 
  - APIconfig
---

## {{ page.title }}

<!--more-->



```
description: |
  This file provides configurations for Beacon query related parameters.
  Parameters are part of different "scopes", which refer to specific (logical
  or physical) data collections.
  The "alias" parameters provide alternative spellings to the parameter names;
  this can be helpful when e.g. using dot-annotation which may clash with
  interpolations.
```
#### API URL structure
The different parameters are extracted from the ordered URL path elements.
```
api_mappings:
  - paramkey: apidb
    default: progenetix
  - paramkey: apiscope
    default: publications
  - paramkey: apimethod
    default: technologycounts
  - paramkey: filters
    default: ""
  - paramkey: apioutput
    default: json
```
#### API Shortcuts

Shortcuts are used to simplify access to methods with canonical databases
and/or collections. They are expanded from `/api/___shortcutKey___/` to the 
associated value.
```
api_shortcuts:
  ncitcodes: '/api/progenetix/icdmaps/ncitcodes/'
  equivalents: '/api/progenetix/icdmaps/equivalents/'
  publicationdata:  '/api/progenetix/publications/publicationdata/'
  publicationdetails:  '/api/progenetix/publications/publicationdetails/'
  technologycounts:  '/api/progenetix/publications/technologycounts/'
```
#### API methods and their scopes
```
api_methods:
  mappings:
    scopes:
      - biosubsets
      - datacollections
  technologycounts:
    scopes:
      - publications
  publicationdata:
    scopes:
      - publications
  publicationdetails:
    scopes:
      - publications
  subsethistogram:
    scopes:
      - publications
      - datacollections
      - biosubsets
  subsetdata:
    scopes:
      - biosubsets
      - datacollections
  geomap:
    scopes:
      - publications
      - biosamples
      - callsets
  sampledetails:
    scopes:
      - biosamples
  count:
    scopes:
      - biosamples
      - publications
      - icdmaps
      - biosubsets
      - datacollections
  equivalents:
    scopes:
      - icdmaps
  ncitcodes:
    scopes:
      - icdmaps
  statusmaps:
    scopes:
      - callsets
  valuemaps:
    scopes:
      - callsets
```
