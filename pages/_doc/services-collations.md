---
title: "Services: collations"
layout: default
permalink: /doc/services/collations.html
www_link: https://github.com/progenetix/bycon
excerpt_separator: <!--more-->
date: 2020-10-20
category:
  - API
tags:
  - API
  - documentation
  - Beacon
  - bycon
  - Python
  - services
---

## {{ page.title }}

* [Documentation Link](https://github.com/progenetix/bycon/blob/master/services/doc/collations.md)
* [Source Link](https://github.com/progenetix/bycon/blob/master/services/collations.py)

* provides access to information about data "subsets" in the Progenetix project
databases
  - typically aggregations of samples sharing an ontology code (e.g. NCIT) or
  external identifier (e.g. PMID)

<!--more-->

#### Parameters

##### `methods`

* `counts`
* `codematches`
  - only delivers data about codes with direct matches, i.e. excluding such
  where only a child term had a direct match
  - this is especially useful for e.g. getting a fast overview about mappings
  of deeply nested coding systems like `NCIT`

#### Examples

* <http://progenetix.org/services/collations?deliveryKeys=id,count&filters=cellosaurus&datasetIds=progenetix>
* <https://progenetix.org/services/collations?filters=NCIT>
* <https://progenetix.org/services/collations?filters=NCIT&method=codematches>
* <http://progenetix.org/services/collations?filters=NCIT&datasetIds=progenetix&method=counts>
* <http://progenetix.org/services/collations?filters=PMID&datasetIds=progenetix&method=counts&callback=4445-9938-cbat-9891-kllt>
* <https://progenetix.org/services/collations?filters=icdom&method=codes&responseType=text>
