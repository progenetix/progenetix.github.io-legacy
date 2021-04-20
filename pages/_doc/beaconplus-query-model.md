---
title: "Beaconplus Data / Query Model"
layout: default
date: 2020-05-26
excerpt_separator: <!--more-->
excerpt_link:
permalink: '/resources/beaconplus-query-model.html'
www_link:
www_links_formatted:
image_file: #'logo_beacon.png'
category:
  - documentation
tags: # please delete unneeded options
  - databases
  - tools
  - documentation
  - Beacon
  - documentation
---

## {{page.title}}

The Progenetix / Beaconplus query model utilises the [GA4GH core data model](https://schemablocks.org/standards/ga4gh-data-model.html) for genomic and (biomedical, procedural) queries and data delivery.

<!--more-->

The GA4GH data model for genomics recommends the use of a principle object hierarchy, consisting of

* __variant__
    - a single molecular observation, e.g. a genomic variant observed in the analysis of the DNA from a biosample
    - mostly corresponding to the "allele" concept, but with alternate use similar to that in VCF (e.g. CNV are no typical "allelic variants")
* __callset__
    - the entirety of all variants, observed in a single experiment on a single sample
    - a _callset_ can be compared to a data column in a __VCF__ variant annotation file
    - _callset_ has an optional position in the object hierarchy, since _variants_ describe biological observations in a biosample
* __biosample__
    - a reference to a physical biological specimen on which analyses are performed
* __individual__
    - in a typical use a human subject from which the biosample(s) was/were extracted

In the Progenetix backend we mirror the GA4GH data model in the storage system, consisting of the corresponding

* variants
* callsets
* biosamples
* individuals

collections of MongoDB databases. These collections are addressed by scoped queries. Since the current Beacon query model only supports variant queries ("BeaconAlleleRequest") and filters, we apply pre-parsing steps for mapping the filter values to the correct attributes and collections (see below).

#### Variant query (VarQ)

The __Variant Query__  is a standard Beacon v1.1 _BeaconAlleleRequest_, including support for ranges, wildcards and structural variants (DUP, DEL, BND).

#### Callset Query (CsQ)

Callsets are queried only indirectly, e.g. as data aggregation target using the `variants.callset_id` values or `biosamples.id` => `callsets.biosample_id` matches.

#### Biosample Query (BiosQ)

Biosamples contain information about biological parameters (e.g. histology, organ site), procedural parameters (e.g. external identifiers, geographic origin) and clinical data specific to the sample (e.g. age at sample collection).

#### Individual Query (IndQ)

In the [GA4GH core data model](https://schemablocks.org/categories/formats/ga4gh-data-model.html), _Individuals_ (or _Subjects_) as data objects contain information pertaining to the whole organism. Typical attributes for use in Beaconplus queries would e.g. be genotypic sex and phenotypic information.


#### Filters

Filters represent a way to allow the resource provider to direct "self-scoped" query values to the corresponding attributes in their backend resource. In the Progenetix implementation, a lookup table followed by scope assignment is used to map prefixed filter values to the correct  attributes and collections:

1. Use the prefix to determine the full attribute   
		* `filters=NCIT:C4033`
		    - query attribute `biocharacteristics.id` for value `NCIT:C4033`   
		* `filters=PMID:28966033`
		    - query attribute `external_references.id` for value `PMID:28966033`    
2. Match the full attribute to the correct scope (i.e. collection, query domain)     


The list below shows a selection from the configuration file (YAML):

```
filter_prefix_mappings:
  NCIT:
    parameter: 'biocharacteristics.id'
  HPO:
    parameter: 'biocharacteristics.id'
  PMID:
    parameter: 'external_references.id'
  cellosaurus:
    parameter: 'external_references.id'
  EFO:
    parameter: 'provenance.material.id'
  city:
    parameter: 'provenance.geo.city'
    remove_prefix: true
```

The different __scopes__ (i.e. collections) have pre-defined attributes that can be queried. For example, a filter `filters=NCIT:C4033` will be resolved to `biocharacteristics.type.id=NCIT:C4033` and the `biocharacteristics.type.id` attribute will match a parameter (or its alias) in the `biosamples` scope, generating a query of `{ "biocharacteristics.type.id" : "NCIT:C4033" }` against the `biosamples` collection.

```
scopes:
  biosamples:
    scope: biosamples
    parameters:
      id:
        paramkey: 'biosamples.id'
        dbkey: 'id'
        alias:
          - 'biosamples-id'
          - 'id'
        pattern: '^.+?\w+?.+?$'
        type: array
      biocharacteristics.id:
        paramkey: 'biosamples.biocharacteristics.id'
        dbkey: 'biocharacteristics.id'
        alias:
          - 'biosamples-biocharacteristics-id'
          - 'biocharacteristics.id'
          - 'biocharacteristics-id'
        pattern: '^(\w+[\:\-$])?\w*?\d(?:[\w\-\.]+?)?'
        type: array
      external_references.id:
        paramkey: 'biosamples.external_references.id'
        alias:
          - 'biosamples-external_references-id'
          - 'external_references.id'
          - 'external_references-id'
        pattern: '^(\w+[\:\-$])?\w.?(?:[\w\-\.]+?)?'
        type: array
```
