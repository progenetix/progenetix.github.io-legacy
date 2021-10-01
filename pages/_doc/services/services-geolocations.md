---
title: "Services: Geolocations"
layout: default
permalink: /doc/services/geolocations.html
www_link: https://github.com/progenetix/bycon
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

* [Documentation Link](https://github.com/progenetix/bycon/blob/master/services/doc/geolocations.md)
* [Source Link](https://github.com/progenetix/bycon/blob/master/services/geolocations.py)

## _geolocations_

This service provides geographic location mapping for cities above 25'000
inhabitants (\~22750 cities), through either:

* matching of the (start-anchored) name
* providing GeoJSON compatible parameters:
  - `geolongitude`
  - `geolatitude`
  - `geodistance`
    * optional, in meters; a default of 10'000m (10km) is provided
    * can be used for e.g. retrieving all places (or data from places if used
    with publication or sample searches) in an approximate region (e.g. for
    Europe using `2500000` around Heidelberg...)

<!--more-->

#### Query Types

* by `city`
  - start-anchored, case insensitive match `?city=heide`
* by `id`
  - this uses the `city::country` "id" value, e.g. `lecce::italy`
* by `geolatitude`, `geolongitude`, `geodistance`

##### Examples

* <https://progenetix.org/services/geolocations?city=zurich>
* <https://progenetix.org/services/geolocations?city=Heidelberg&callback=75gytk44r4yssls8j>
* <https://progenetix.org/services/geolocations?city=New&responseFormat=simplelist>
* <https://progenetix.org/services/geolocations?geolongitude=-0.13&geolatitude=51.51&geodistance=100000>



<!--/podmd-->
