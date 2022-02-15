---
title: "Services: ids"
layout: default
permalink: /doc/services/ids.html
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

The `ids` service forwards compatible, prefixed ids (see [`config/ids.yaml`](https://github.com/progenetix/bycon/blob/master/services/config/ids.yaml)) to specific
website endpoints. There is no check if the id exists; this is left to the web
page handling itself.

Stacking with the "pgx:" prefix is allowed.

* <https://progenetix.org/services/ids/pgxbs-kftva5zv>
* <https://progenetix.org/services/ids/PMID:28966033>
* <https://progenetix.org/services/ids/NCIT:C3262>
* <https://progenetix.org/services/ids/cellosaurus:CVCL_0022>

<!--more-->

* [Documantation Link](https://github.com/progenetix/bycon/blob/master/services/doc/ids.md)
* [Source Link](https://github.com/progenetix/bycon/blob/master/services/ids.py)
