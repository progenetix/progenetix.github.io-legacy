---
title: "QueryParameters.pm Perl Code Documentation"
layout: default
www_link: https://github.com/progenetix/BeaconPlus
excerpt_separator: <!--more-->
date: 2020-10-21
category:
  - howto
tags:
  - code
  - documentation
  - Beacon
  - Perl
  - BeaconPlus
---

## {{ page.title }}

<!--more-->

* [Source Link](https://github.com/progenetix/BeaconPlus/blob/master/QueryParameters.pm) 

The _BeaconPlus_ environment utilizes the _Beacon_ protocol for federated genomic
variant queries, extended by methods discussed in the Beacon API development
and custom extensions which may - or may not - make it into the Beacon
specification but help to increase the usability of the
[Progenetix](https://progenetix.org) resource.

### Reading the Beacon Specification

While the specification _in principle_ follows the Beacon specification, and
offers a minimal method to access it, this optioned isn't used in practice due
to the "forward looking" nature of some of the BeaconPlus methods.

#### Deparsing the query string

The query string is deparsed into a hash reference, in the "$query" object,
with the conventions of:

* each parameter is treated as containing a list of values
* values are __split into a list by the comma character__; so an example of
    `key=val1&key=val2,val3`
  would be deparsed to
    `key = [val1, val2, val3]`

The treatment of each attribute as pointing to an array leads to a consistent,
though sometimes awkward, access to the values; even consistently unary values
have to be addressed as (first) array element.

An API request is converted in two stages:

1. API shortcuts are resolved; i.e. requests requiring a specific database
and/or collection may have pre-defined `api_shortcuts` values to allow the use
of simple canonical URIs, which at this stage are being expanded to the full
format.

2. The API request is split & mapped to standard query parameters.

#### Matching parameters to their scopes

In the configuration file, the root attribute `scopes` contains the definitions
of the different "scopes" (essentially the different data collections) and which
query parameters can be applied to them. These definitions also provide

* `alias` values
    - allowing to use different names for the parameter e.g. in forms (avoiding
    dot annotation problems)
* `paramkey`
    - the fully expanded database attribute, including the collection name
        * `publications.provenance.geo.city`
* `dbkey`
    - the attribute, w/o prepended collection

Foreach of the scopes, the pre-defined _possible_ parameters are evaluated for
corresponding values in the object generated from parsing the query string. If
matching values are found those are added to the pre-formatted query parameter
object for the corresponding scope. Those scoped parameter objects will then be
processed depending on the type of query (e.g. "variants" queries have a
different processing compared to "biosamples" queries; see below).

#### Normalization of variant query parameters

The `norm_variant_params` function creates intervals for variant 
("BeaconAlleleRequest") queries from interpolation of all "start" and "end" 
parameters. This is done greedily, i.e. allowing for incorrect submission order 
and mix of e.g. "startMax" and "startMin" parameter types. The decision if a query 
with such a mix should be rejected is handled elsewhere.

The output of the routine are:

* `start_range`
    - 2-value array for start matches
    - interbase format (i.e. if only one value was provided the range will be
    [value, value + 1]
* `end_range`
    - as above
* `pos_range`
    - 2-value array from start to end
    - e.g. for range matches
    
##### Interpolation of "SNV" type

If `variantType: "SNV"` is specified w/o `alternateBases` value, the wildcard 
"N" value is inserted.


#### CNV "Point" Query

This query type is based on the assumption that a query consisting of

* a CNV variant type
    - `DUP`
    - `DEL`
    - `CNV` (i.e. either `DUP` or `DEL`)
* a single `start` parameter (or `startMin` and `startMax`)
* _no_ `end` parameter (also no `endMin` and `endMax`)

... aims to detect any CNV of the given type overlapping the `start` position.

```
---------s-----------------------

------+++++++++++++++++++++++++++
++++++++++-----------------------
-------+++++++-------------------
```

#### Function `create_precise_query`

This function handles the generation of the variant query for "precise" variants
(i.e. such annotated with  `referenceBases` and `alternateBases`, but including
wildcard matches).

TODO: Split-off of the truly precise queries with single start` positional 
parameter


#### Sample (_biosamples_ and _callsets_) Queries

Queries with multiple options for the same attribute are treated as logical "OR".
#### Special Boolean handling

The automatic Boolean query logic follows:

* query values of the same scope are treated as *OR*
* different scopes are connected trough *AND*

For `biocharacteristics` there is one exception: Query values for `icdom` and 
`icdot` are connected with *AND*, even though they target the same scope. This 
is due to the assumption that one may want to subset samples of a given 
morphology by topography (and _vice versa_), and that ICD-O M + T also can be
mapped to single ontologies like NCIt.


The current code just looks for the co-existence of `icdom` and `icdot` prefixed
values & then constructs some fancy "$or" and "$and" request to MongoDB.


The construction of the query object depends on the detected parameters:

* if empty list => no change, empty object
* if 1 parameter => direct use
* if several parameters are queried => connection through the MongoDB  "$and" constructor

