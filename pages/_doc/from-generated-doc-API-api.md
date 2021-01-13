---
title: "Legacy API Documentation"
layout: default
www_link:
excerpt_separator: <!--more-->
permalink: /doc/api.html
date: 2020-06-20
category:
  - API
tags:
  - code
  - documentation
  - Progenetix
  - API
  - services
  - Perl
  - .featured
---

## {{ page.title }}

The current implementation of the Progenetix APIs uses 2 URL endpoints:

* `progenetix.org/services/`
  - documented at [services](/doc/services/services.html)
  - powered by the [bycon](http://github.com/progenetix/bycon/) project
  - target for further development
* `progenetix.org/api/`
  - documented here
  - based on the original Perl libraries
  - stepwise deprecation in favour of `services`

<!--more-->

## DEPRECATED

The documentation below concerns the legacy Perl API. Most of this will still
be functional as of 2020, but `services` should be preferred if providing the
needed functionality.

### API syntax

The query elements are ordered in the URL

1. `api`
    - fixed, required; i.e. the request has to start with `/api/`
2. database (parameter `apidb`)
    - mostly "progenetix"
3. collection (`apiscope`)
4. method (`apimethod`)
    - see examples/documentation below
5. filters (`filters`)
    - essentially query parameters in a simplified format
    - comma-concatenated
    - can also be omitted for query string
6. output parameter (`apioutput`)
    - optional
7. query string
    - optional
    - can be used for any parameter; e.g. a query can be formatted completely
    as standard query string:
        * `progenetix.org/api/?apidb=progenetix&apiscope=publications ...`

### API Shortcuts

Some API functions (i.e. such targeting a canonical database and/or collection)
can be accessed through shortcuts which omit the respective elements. These
`api_shortcuts` work through a simple expansion of the short URL element by
the full API URL elements, before the query deparsing stages.

### API Examples

#### Biosamples

##### Scopes

* `biosamples`

##### Methods

* `count`
    - <https://progenetix.org/api/progenetix/biosamples/count/icdom-85003/>
    - <https://progenetix.org/api/progenetix/biosamples/count/icdom-85,icdom-91/>
    - <https://progenetix.org/api/progenetix/biosamples/count/EFO:0009656/>
    - <https://progenetix.org/api/progenetix/biosamples/count/icdom-94403,geolong:8.69,geolat:49.1,geodist:2000000/>
* `sampledetails`
    - <https://progenetix.org/api/progenetix/biosamples/sampledetails/icdom-81703/>
    - <https://progenetix.org/api/progenetix/biosamples/sampledetails/icdom-94403/text/>
        * This example prints a tabular output of sample parameters.
        * Please be aware that the columns order is not fixed, but follows the
        labels in the header line.
* `geomap`
    - <https://progenetix.org/api/arraymap/biosamples/geomap/icdom-817/?-map_marker_scale=8>

#### ICD mappings **DEPRECATED**

<!--
##### Scopes

* `icdmaps`

The `icdmaps` collection reflects data from the
["ICDontologies"](https://github.com/progenetix/ICDontologies/) project which
provides mappings between ICD-O 3 Morphology & Topography codes and the NCIt
cancer core codes.

##### Methods

* `count`
* `ncitcodes`
    - <https://progenetix.org/api/progenetix/icdmaps/ncitcodes/icdom-85003,icdot-C50/>   
        * retrieving the matching NCIT code(s) from an input of comma-separated
        icdom and icdot values, as key (code) : value (label) objects
* `equivalents`
    - <https://progenetix.org/api/progenetix/icdmaps/equivalents/icdom-85,icdot-C50/>  
        * as in the example above, but by a) stemmming the query parameters and
        b) removing the `ncitcodes` format argument, the response will now be a
        list of matched data objects (inputs and equivalents)
-->

#### Publication data

##### Scopes

* `publications`

##### Methods

* `count`
* `technologycounts`
    * <https://progenetix.org/api/progenetix/publications/technologycounts/PMID:12/text/>
    * <https://progenetix.org/api/?apiscope=publications&publications.id=PMID:&apimethod=technologycounts&apioutput=text>
    * <https://progenetix.org/api/progenetix/publications/technologycounts/city:heidelberg/text/>
    * <https://progenetix.org/api/progenetix/publications/technologycounts/?city=Heidelberg>
        - the same query as the one before, but here using an explicit query string
        instead of a filter
* `publicationdata`
    * <https://progenetix.org/api/progenetix/publications/publicationdata/?filters=genomes:&gt;0>
        - This call will return the publication data for all publications with
        an annotated genome count as JSON
    * <https://progenetix.org/api/progenetix/publications/publicationdata/counts.genomes:&gt;0/text/>
        - This call will return the publication data for all publications with  an annotated genome count as text
* `geomap`
    * <https://progenetix.org/api/progenetix/publications/geomap/?-map_marker_scale=4&mapcaption=1>
        - an MapBox / [OpenStreetmap](http://openstreetmap.org) representation
        of the number opf cancer genome screening experiments mapped to the
        origin of the publications


#### Data subsets

##### Scopes

* `biosubsets`
* `datacollections`

##### Methods

* `count`
* `mappings`  
    - <https://progenetix.org/api/progenetix/biosubsets/mappings/icdom-8,icdom-9/>  
        * the biocharacteristics of the respective database (here progenetix)  
    - <https://progenetix.org/api/progenetix/biosubsets/mappings/shortlabel,icdom-81/>  
        * as above, but only the ones containing "icdom-81"  
        * also, the `label` parameter is shortened (e.g. for autocompletes, selection
        lists)  
    - <https://progenetix.org/api/progenetix/biosubsets/mappings/shortlabel,icdom-81/text/>  
        * as the one before, but output as a table  
    - <https://progenetix.org/api/progenetix/biosubsets/mappings/*/text/>  
        * this uses a (usually forbidden) "match all" filter  

### Code notes
