---
title: "ConfigLoader.pm Perl Code Documentation"
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

* [Source Link](https://github.com/progenetix/BeaconPlus/blob/master/ConfigLoader.pm) 

The BeaconPlus::ConfigLoader library

* configures the execution environment based on the parameters in the `./config/config.yaml` file
* calls the BeaconPlus::QueryParameters library to create the query objects

Objects accessible through `$config`

* `$config->{cgi}`
    - provides access to CGI parameters
* `$config->{param}`
    - deparsed CGI parameters, where all have been treated as arrays
* `$config->{queries}`
    - the pre-defined query objects for the different query scopes
        * `$config->{queries}->{variants}` contains the query object against the "variants" collection
* `$config->{filters}`
    - filters for e.g. query result post-processing (e.g. "randno")
* `$config->{query_errors}`



Only datasets from the query are used if specified as "datasetIds".

### RandArr

This dependency-free array randomiser will return a re-shuffled array(ref) or
a slice of random $iL array elements.

The $overSamp factor is "empirical" and balances between oversampling with
out-of-range values + filtering, and cycling too many times to match all
index elements.

#### Expects:

* an array reference of arbitrary content
* the number of array elements to be returned (optional)

#### Return

* the re-shuffled array or a subset of its elements (as array reference)

