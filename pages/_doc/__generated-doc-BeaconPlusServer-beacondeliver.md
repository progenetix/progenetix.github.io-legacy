---
title: "beacondeliver.cgi Perl Code Documentation"
layout: default
www_link: 
excerpt_separator: <!--more-->
date: 2020-10-21
category:
  - howto
tags:
  - code
  - documentation
  - Beacon
  - Perl
  - BeaconPlusServer
---

## {{ page.title }}

<!--more-->


The __BeaconHandover__ is a utility server side application to provide 
__h-&gt;o__ functionality to the _BeaconPlus_ environment.

The script accepts following parameters:

* `accessid`
    - the `id` of an entry in the `___handover_db___.___handover_coll___` 
    database, which in the standard implementation stores pointers to the 
    results from a _BeaconPlus_ query
* `do`
    - an action from `handover_types`
* `jsonpretty`
    - formatting instruction for JSON style
    - defaults to '0', i.e. no line breaks etc.
    - values of 1 or y or pretty will provide an formatted return

