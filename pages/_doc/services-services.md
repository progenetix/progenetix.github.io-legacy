---
title: "Bycon Services"
layout: default
permalink: /doc/services/services.html
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
  - .featured
---

## {{ page.title }}

The _bycon_ environment provides a number of data services which make use of
resources in the _Progenetix_ environment. Please refer to their specific
documentation.

* [_collations_](/doc/services/collations.html)
* [_cytomapper_](/doc/services/cytomapper.html)
* [_deliveries_](/doc/services/deliveries.html)
* [_genespans_](/doc/services/genespans.html)
* [_geolocations_](/doc/services/geolocations.html)
* [_ids_](/doc/services/ids.html)
* [_intervalFrequencies_](/doc/services/intervalfrequencies.html)
* [_ontologymaps_](/doc/services/ontologymaps.html)
* [_publications_](/doc/services/publications.html)
* [_schemas_](/doc/services/schemas.html)

Note: As of 2021-04-07 there are some changes - typical Beacon endpoints such as `biosamples` have been moved to the `/beacon/__service-name__` path:

* [_biosamples_](/doc/beacon/biosamples.html)
* [_variants_](/doc/beacon/variants.html)

### `services.py` and URL Mapping

The service URL format `progenetix.org/services/__service-name__?parameter=value`
is a shorthand for `progenetix.org/cgi-bin/bycon/services/__service-name__.py?parameter=value`.

<!--more-->

The `services` application deparses a request URI and calls the respective
script.

### Response formats

Standard responses are provided as `Content-Type: application/json`. The wrapper
format for JSON encoded data follows the standard Beacon response
format where the main data is contained in the `response.results` array.

For more information see the [beaconresponse json](/doc/beaconresponse-json.html)
documentation.
