---
title: "DataExporter.pm Perl Code Documentation"
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

* [Source Link](https://github.com/progenetix/BeaconPlus/blob/master/DataExporter.pm) 

If a custom URL is provided (e.g. here by previously overriding the 
`$exporter->{handover_types}->{UCSClink}->{url}` value), this value will replace 
the handover `url` value. Alternatively, a URL provided as `script_path_web` 
parameter will be prefixed to the query. If it contains a full address (i.e. 
"http") it will replace the canonical script root (e.g. here used for sending an 
action to the UI instead of the cgi entry point).

#### `BeaconPlus::DataExporter::write_variants_bedfile`

##### Accepts

* a BeaconPlus _config_ object
* a BeaconPlus _handover_ object with its `target_values` representing `id` 
objects of a `variants` collection
* the path to an output file
    - optional, otherwise crated in the "tmp" directory of the document root
    
The function creates a basic BED file and returns its local path. A standard 
use would be to create a link to this file and submit it as `hgt.customText` 
parameter to the UCSC browser.

##### TODO

* The creation of the different variant types is still rudimentary and has to be 
expanded in lockstep with improving Beacon documentation and examples. The 
definition of the types and their match patterns should also be moved to a 
+separate configuration entry and subroutine.
* evaluate to use "bedDetails" format

