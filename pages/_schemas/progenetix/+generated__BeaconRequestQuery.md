---
title: BeaconRequestQuery
layout: default
permalink: "/schemas/progenetix/BeaconRequestQuery.html"
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
  <h2>BeaconRequestQuery <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
    <th>Source (v2021-03-07)</th>
    <td>
      <ul>
        <li><a href="current/BeaconRequestQuery.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/BeaconRequestQuery.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Type:__ object  
__Description:__ Description pending

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>analysis</th>
    <td>BeaconAnalysisFields.yaml#/properties [<a href="./BeaconAnalysisFields.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>biosample</th>
    <td>BeaconBiosampleFields.yaml#/properties [<a href="./BeaconBiosampleFields.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>customFilters</th>
    <td>BeaconFilters.yaml#/schemas/CustomFilters [<a href="./BeaconFilters.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>datasets</th>
    <td>BeaconRequestDatasets.yaml#/properties [<a href="./BeaconRequestDatasets.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>filters</th>
    <td>BeaconFilters.yaml#/schemas/Filters [<a href="./BeaconFilters.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>g_variant</th>
    <td>BeaconGenomicVariantFields.yaml#/properties [<a href="./BeaconGenomicVariantFields.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>individual</th>
    <td>BeaconIndividualFields.yaml#/properties [<a href="./BeaconIndividualFields.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>interactor</th>
    <td>BeaconInteractorFields.yaml#/properties [<a href="./BeaconInteractorFields.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>pagination</th>
    <td>BeaconPagination.yaml#/properties [<a href="./BeaconPagination.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>run</th>
    <td>BeaconRunFields.yaml#/properties [<a href="./BeaconRunFields.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>variant_in_sample</th>
    <td>BeaconVariantInSampleFields.yaml#/properties [<a href="./BeaconVariantInSampleFields.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>variant_interpretation</th>
    <td>BeaconVariantInterpretationFields.yaml#/properties [<a href="./BeaconVariantInterpretationFields.html">HTML</a>]</td>
  </tr>

</table>


#### analysis

* type: BeaconAnalysisFields.yaml#/properties [<a href="./BeaconAnalysisFields.html">HTML</a>]




#### biosample

* type: BeaconBiosampleFields.yaml#/properties [<a href="./BeaconBiosampleFields.html">HTML</a>]




#### customFilters

* type: BeaconFilters.yaml#/schemas/CustomFilters [<a href="./BeaconFilters.html">HTML</a>]




#### datasets

* type: BeaconRequestDatasets.yaml#/properties [<a href="./BeaconRequestDatasets.html">HTML</a>]




#### filters

* type: BeaconFilters.yaml#/schemas/Filters [<a href="./BeaconFilters.html">HTML</a>]




#### g_variant

* type: BeaconGenomicVariantFields.yaml#/properties [<a href="./BeaconGenomicVariantFields.html">HTML</a>]




#### individual

* type: BeaconIndividualFields.yaml#/properties [<a href="./BeaconIndividualFields.html">HTML</a>]




#### interactor

* type: BeaconInteractorFields.yaml#/properties [<a href="./BeaconInteractorFields.html">HTML</a>]




#### pagination

* type: BeaconPagination.yaml#/properties [<a href="./BeaconPagination.html">HTML</a>]




#### run

* type: BeaconRunFields.yaml#/properties [<a href="./BeaconRunFields.html">HTML</a>]




#### variant_in_sample

* type: BeaconVariantInSampleFields.yaml#/properties [<a href="./BeaconVariantInSampleFields.html">HTML</a>]




#### variant_interpretation

* type: BeaconVariantInterpretationFields.yaml#/properties [<a href="./BeaconVariantInterpretationFields.html">HTML</a>]



<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


