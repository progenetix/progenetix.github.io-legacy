---
title: "beaconresponse.cgi Perl Code Documentation"
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


The "beaconresponse.cgi" script is a server backend for the Beacon protocol,
specifically adapted to connect to _MongoDB_ database backends that adhere to
the core GA4GH model.

#### Example Queries

* <https://beacon.progenetix.org/cgi-bin/beaconresponse.cgi?datasetIds=arraymap&datasetIds=progenetix&referenceName=9&assemblyId=GRCh38&variantType=DEL&startMin=19500000&startMax=21975098&endMin=21967753&endMax=24500000&referenceBases=N&filters=NCIT:C3224>
    - focal deletions in the CDKN2A locus, filtered for "NCIT:C3224" (Melanoma)
    - this query is against 2 datasets (progenetix, arraymap)
    - *this query puts some serious strain on the server!*
* <https://beacon.progenetix.org/cgi-bin/beaconresponse.cgi/?datasetIds=arraymap&referenceName=9&assemblyId=GRCh38&variantType=DEL&startMin=19500000&startMax=21975098&endMin=21967753&endMax=24500000&referenceBases=N&filters=icdom-94003>
    - as above, but using "icdom-94003", the internal code for ICD-O 3 "9400/3" (Glioblastoma, NOS)
* <https://beacon.progenetix.org/cgi-bin/beaconresponse.cgi?datasetIds=dipg&referenceName=17&assemblyId=GRCh38&startMin=7572826&endMax=7579005&referenceBases=*&alternateBases=N&filters=icdot-C71.7&>
    - wildcard range query for allelic variants on chromosome 17, between bases 7572826 and 7579005
    - dataset "dipg"
    - Since the current specification requires a `alternateBases` parameter, and doesn't include wildcards *but* allows "N", the query will __only__ return variants where the replacement has a length of 1. "NN" leads to 2 etc. This may be changed in future versions of the protocol.
* <https://beacon.progenetix.org/cgi-bin/beaconresponse.cgi?datasetIds=dipg&referenceName=17&assemblyId=GRCh38&start=7577121&referenceBases=G&alternateBases=A&filters=icdot-C71.7&>
		- the "traditional" precise BeaconAlleleRequest, as supported by the first Beacon version
    - dataset "dipg"  

The parameters of the allele request are verified & added to the response.

#### Beacon Query Execution

Different types of query are run, if parameters for them exist.

The current concept is:

- run queries on the different primary object types (individual, biosample, callset, variant)
- provide the object-level counts as output (and store the ids for handover procedures)
- aggregate on biosamples

* Variant query
* Callset query
* Biosample query
* Individual query

The details of the query execution can be found in the documentation for the
[__BeaconPlus::QueryExecution.pm__](/doc/+generated-doc-BeaconPlus-QueryExecution/) module.

