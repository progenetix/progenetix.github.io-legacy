---
title: "Services: deliveries"
layout: default
permalink: /doc/services/deliveries.html
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

* a simple app which only provides data deliveries from handover objects
* requires a (locally existing) `accessid` parameter
* optionally limiting the response content by supplying a `deliveryKeys` list
(can be comma-concatenated or multiple times parameter)

<!--more-->

* [Documentation Link](https://github.com/progenetix/bycon/blob/master/services/doc/deliveries.md)
* [Source Link](https://github.com/progenetix/bycon/blob/master/services/deliveries.py)

The `deliveries` method is mostly used for internal applications or as part of
automatically generated API actions.
