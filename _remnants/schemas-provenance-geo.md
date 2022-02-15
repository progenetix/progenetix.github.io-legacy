---
title: "Structure of geographic data"
date: 2021-01-25
layout: default
author: "@mbaudis"
permalink: "/doc/geodata.html"
excerpt_separator: <!--more-->
pdf_file_name:
pdf_file_type:    # slides poster article
www_link:
www_links_formatted:   # use this for one or more, complete HTML link(s) with label '<a href="http://" target="_blank">...</a>'
category:
  - documentation
tags:
  - arraymap
  - Progenetix
  - mongodb
  - server
  - geodata
  - news
  - API
  - schemas
---

## {{ page.title }}

*Note*: This page has been uppdated to reflect the new *GeoJSON complete* schema version
from January 2021.

We have now a new standard structure for _geo_location_ objects, which has been implemented
for `biosamples` and `publications`.

<!--more-->

### `GeoLocation` data format

* [schema](https://progenetix.org/services/schemas/GeoLocation/)
* [examples through service call](https://progenetix.org/services/geolocations?city=Heidelberg)

```
"geometry": {
  "coordinates": [
    8.69,
    49.41
  ],
  "type": "Point"
},
"properties": {
  "ISO3166alpha2": "DE",
  "ISO3166alpha3": "DEU",
  "city": "Heidelberg",
  "continent": "Europe",
  "country": "Germany"
},
"type": "Feature"
```
