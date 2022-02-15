---
title: "Services: Ontolgymaps"
layout: default
permalink: /doc/services/ontologymaps.html
www_link:
excerpt_separator: <!--more-->
date: 2020-10-20
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

The `ontologymaps` service provides equivalency mapping between ICD-O and other
classification systems, notably NCIt. The mappings are represented in the [ICDOntologies](https://github.com/progenetix/ICDOntologies) project and accessible trough a front-end in the [Progenetix Services area](https://progenetix.org/service-collection/ontologymaps).

<!--more-->

### ICD-O Representation

Our resources use an internal representation of ICD-O 3 codes since no official CURIES are provided by the IARC. The syntax is:

* ICD-O 3 morphologies
  - "pgx:icdom-"`s/\///`; i.e. number only code
  - "8500/3" => `pgx:icdom-85003`
* ICD-O 3 Topographies
  - "icdot-" + code
  - "C53.9" => `pgx:icdot-C53.9`

#### Parameters

##### `filters`

* required
* comma-concatenated __complete__ codes and/or prefixes
* partial codes (see above for ICD-O syntax) will not be matched unless a relaxed filter precision is indicated

##### `filterPrecision`

* optional
* to allow partial code matches (see examples below)

#### Examples

##### NCIt and ICD-O 3

* <https://progenetix.org/services/ontologymaps/?filters=icdom-85003>
* <https://progenetix.org/services/ontologymaps/?filters=NCIT>
* <https://progenetix.org/services/ontologymaps/?filters=icdom-85003,icdot-C50.9>
* <https://progenetix.org/services/ontologymaps/?filters=icdom-85,icdot-C50&filterPrecision=start>
  - As in the example above, but by stemmming the query parameters and providing the `filterPrecision=start` pragma, the response will now be a list of matched data objects (inputs and equivalents)

##### UBERON and ICD-O 3 Topography

* <https://progenetix.org/services/ontologymaps/?filters=UBERON:0,UBERON:1&filterPrecision=start>
  - all mappings where the code starts with either 0 or 1
* <https://progenetix.org/services/ontologymaps/?filters=UBERON,icdot-C0&filterPrecision=start>
  - all `C0...` ICD-O T matches
  - limited to `UBERON` mappings since the prefix was given, too (otherwise all the NCIT mappings would also be listed for these ICD-O T code matches)

#### More Information

* [Web Interface for ICD & NCIT](https://progenetix.org/service-collection/ontologymaps)
* [Interface for ICD & UBERON](https://progenetix.org/service-collection/uberonmaps)
