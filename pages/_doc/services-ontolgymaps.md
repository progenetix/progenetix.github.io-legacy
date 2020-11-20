---
title: "Services: Ontolgymaps"
layout: default
permalink: /doc/services/ontologymaps.html
www_link: 
excerpt_separator: <!--more-->
date: 2020-10-20
category:
  - API
tags:
  - code
  - API
  - documentation
  - Beacon
  - bycon
  - Python
  - Bycon
  - services
---

## {{ page.title }}

The `ontologymaps` service provides equivalency mapping between ICD-O and other
classification systems, notably NCIt. The mappings are represented in the [ICDOntologies](https://github.com/progenetix/ICDOntologies) project and accessible trough a front-end in the [Progenetix Services area](https://progenetix.org/service-collection/ontologymaps).

<!--more-->

#### Examples

##### NCIt and ICD-O 3

* <https://progenetix.org/services/ontologymaps/?filters=icdom-85003>
* <https://progenetix.org/services/ontologymaps/?filters=NCIT>
* <https://progenetix.org/services/ontologymaps/?filters=icdom-85003,icdot-C50.9>
* <https://progenetix.org/services/ontologymaps/?filters=icdom-85,icdot-C50&filterPrecision=start>
  - As in the example above, but by stemmming the query parameters and providing the `filterPrecision=start` pragma, the response will now be a list of matched data objects (inputs and equivalents)
  
##### UBERON and ICD-O 3 Topography

* <https://progenetix.org/services/ontologymaps/?filters=UBERON&filterPrecision=start>
  - all mappings
* <https://progenetix.org/services/ontologymaps/?filters=icdot-C0&filterPrecision=start>

#### More Information

* [Web Interface for ICD & NCIT](https://progenetix.org/service-collection/ontologymaps)
* [Interface for ICD & UBERON](https://progenetix.org/service-collection/uberonmaps)
* [Source Link](https://github.com/progenetix/bycon/blob/master/services/ontologymaps.py)
* [Project Source](https://github.com/progenetix/bycon)
