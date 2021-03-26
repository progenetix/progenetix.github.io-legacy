---
title: "Geographic Coordinates"
date: 2021-03-26
layout: default
permalink: /doc/geolocations.html
author: Michael Baudis
excerpt_separator: <!--more-->
category:
  - howto
tags:
  - resources
  - documentation
  - API
  - geolocations
---

## {{ page.title }}
#### Provenance and use of geolocation data

Geographic point coordinates are assigned to each sample after review of existing information from associated publications or repository information for their ”best available” geographic origin using a precedence of:  
1. sample specific data (e.g. from article text)
2. experiment location
3. first author proxy

<!--more-->

For publications w/o accessible sample data in general the "author proxy" is being used, unless specific annotations have been found in the article.

A more detailed discussion of the problems and benefits of geographic provenance tagging can be found in [Carrio-Cordo _et al._, DATABASE 2020](https://academic.oup.com/database/article/doi/10.1093/database/baaa009/5812711).

#### `Geolocs` Service

The Progenetix API provides a service for [retrieving geographic coordinates](/doc/services/geolocations.html) as point coordinates, for the majority of cities.
