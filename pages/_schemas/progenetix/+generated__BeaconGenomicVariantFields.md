---
title: BeaconGenomicVariantFields
layout: default
permalink: "/schemas/progenetix/BeaconGenomicVariantFields.html"
sb_status: "community"
excerpt_separator: <!--more-->
category:
  - schemas
tags:
  - code
  - community
  - schemas
---


<div id="schema-header-title">
  <h2>BeaconGenomicVariantFields <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
</div>

<table id="schema-header-table">
  <tr>
    <th>{S}[B] Status <a href="https://schemablocks.org/about/sb-status-levels.html">[i]</a></th>
    <td><div id="schema-header-status">community</div></td>
  </tr>

  <tr>
    <th>Provenance</th>
    <td>
      <ul>
<li><a href="https://github.com/ga4gh-beacon/specification-v2">Beacon v2</a></li>
<li><a href="https://github.com/progenetix/bycon/">Progenetix `bycon` project</a></li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Used by</th>
    <td>
      <ul>
<li><a href="https://github.com/progenetix/schemas/">Progenetix database schema (Beacon+ backend)</a></li>
      </ul>
    </td>
  </tr>

<!--more-->

  <tr>
    <th>Contributors</th>
    <td>
      <ul>
<li><a href="https://beacon-project.io/categories/people.html">ELIXIR Beacon project team</a></li>
<li><a href="https://orcid.org/0000-0002-9903-4248">Michael Baudis</a></li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Source (v2021-03-07)</th>
    <td>
      <ul>
        <li><a href="current/BeaconGenomicVariantFields.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/BeaconGenomicVariantFields.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Type:__ object  
__Description:__ All the required fields to query any kind of variant (e.g. SNP, DUP, 
etc.).

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>alternateBases</th>
    <td>./BeaconAlternateBases.yaml [<a href="./BeaconAlternateBases.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>assemblyId</th>
    <td>./BeaconGenomicComponents.yaml#/schemas/Assembly [<a href="./BeaconGenomicComponents.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>end</th>
    <td>array of "integer"</td>
  </tr>
  <tr>
    <th>id</th>
    <td>string</td>
  </tr>
  <tr>
    <th>mateName</th>
    <td>./BeaconGenomicComponents.yaml#/schemas/Chromosome [<a href="./BeaconGenomicComponents.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>referenceBases</th>
    <td>./BeaconReferenceBases.yaml [<a href="./BeaconReferenceBases.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>referenceName</th>
    <td>./BeaconGenomicComponents.yaml#/schemas/Chromosome [<a href="./BeaconGenomicComponents.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>start</th>
    <td>array of "integer"</td>
  </tr>
  <tr>
    <th>variantType</th>
    <td>string</td>
  </tr>

</table>


#### alternateBases

* type: ./BeaconAlternateBases.yaml [<a href="./BeaconAlternateBases.html">HTML</a>]




#### assemblyId

* type: ./BeaconGenomicComponents.yaml#/schemas/Assembly [<a href="./BeaconGenomicComponents.html">HTML</a>]




#### end

* type: array of "integer"

Precise or fuzzy end coordinate(s) (0-based, exclusive). See `start`. 

For fuzzy matches, provide 2 values in the array (e.g. [111,222]).



#### id

* type: string

Id of the variant to display.



#### mateName

* type: ./BeaconGenomicComponents.yaml#/schemas/Chromosome [<a href="./BeaconGenomicComponents.html">HTML</a>]




#### referenceBases

* type: ./BeaconReferenceBases.yaml [<a href="./BeaconReferenceBases.html">HTML</a>]




#### referenceName

* type: ./BeaconGenomicComponents.yaml#/schemas/Chromosome [<a href="./BeaconGenomicComponents.html">HTML</a>]




#### start

* type: array of "integer"

Precise or fuzzy start coordinate position(s), allele locus 
(0-based, inclusive).
* `start` only:
  - for single positions, e.g. the start of a specified sequence 
  alteration where the size is given through the specified 
  `alternateBases`
  - typical use are queries for SNV and small InDels
  - the use of `start` without an `end` parameter requires the use 
  of `referenceBases`
* `start` and `end`:
  - if used with `variantType`, for special use case for exactly 
  determined structural changes
  - without `variantType`, for searching any variant falling within 
  this range (a.k.a. range query)
* use 2 values for querying imprecise positions (e.g. identifying 
all structural variants starting anywhere between `start[0]` <-> 
`start[1]`, and ending anywhere between `end[0]` <-> `end[1]`)
* single or double sided precise matches 
can be achieved by setting `start[1]=start[0]+1` and `end[1]=end[0]+1`



#### variantType

* type: string

The `variantType` is used to denote e.g. structural variants.
Examples:
* DUP: duplication of sequence following `start`; not necessarily in
situ
* DEL: deletion of sequence following `start`
* BND: breakend, i.e. termination of the allele at position
      `start` or in the `startMin` => `startMax` interval, or fusion
      of the sequence to distant partner
Optional: either `alternateBases` or `variantType` is required.


<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


