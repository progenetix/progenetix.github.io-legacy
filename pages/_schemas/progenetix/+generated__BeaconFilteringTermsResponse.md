---
title: BeaconFilteringTermsResponse
layout: default
permalink: "/schemas/progenetix/BeaconFilteringTermsResponse.html"
sb_status: "community"
excerpt_separator: <!--more-->
category:
  - schemas
tags:
  - BeaconV2
  - Progenetix
  - code
  - community
  - schemas
  - specification
---

<div id="schema-header-title">
  <h2>BeaconFilteringTermsResponse <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
<li><a href="https://github.com/jrambla">Jordi Rambla</a></li>
<li><a href="https://github.com/sdelatorrep">Sabele de la Torre</a></li>
<li><a href="https://github.com/mamanambiya">Mamana Mbiyavanga</a></li>
<li><a href="https://orcid.org/0000-0002-9903-4248">Michael Baudis</a></li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Source (v2021-03-09)</th>
    <td>
      <ul>
        <li><a href="current/BeaconFilteringTermsResponse.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/BeaconFilteringTermsResponse.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Type:__ object  
__Description:__ Filtering terms available in this Beacon.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>apiVersion</th>
    <td>string</td>
  </tr>
  <tr>
    <th>beaconId</th>
    <td>string</td>
  </tr>
  <tr>
    <th>filteringTerms</th>
    <td>array of "BeaconFilteringTerm.yaml#/properties [<a href="./BeaconFilteringTerm.html">HTML</a>]"</td>
  </tr>

</table>


#### apiVersion

* type: string

Version of the API implemented by this Beacon.



#### beaconId

* type: string

Identifier of the beacon, as defined in `Beacon`.



#### filteringTerms

* type: array of "BeaconFilteringTerm.yaml#/properties [<a href="./BeaconFilteringTerm.html">HTML</a>]"



<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


