---
title: BeaconFilters
layout: default
permalink: "/schemas/progenetix/BeaconFilters.html"
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
  <h2>BeaconFilters <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/BeaconFilters.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/BeaconFilters.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ Filters are usually CURIE based or in case of custom filters "CURIE styled" query parameters.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>CustomFilters</th>
    <td>array of "string"</td>
  </tr>
  <tr>
    <th>Filters</th>
    <td>array of "string"</td>
  </tr>

</table>


#### CustomFilters

* type: array of "string"

Custom filters defined by this Beacon.


##### `CustomFilters` Value Example  

```
"mydict.aterm:avalue,mydict.aterm2:avalue2"
```

#### Filters

* type: array of "string"

Ontology based filters. CURIE syntax is encouraged.


##### `Filters` Value Example  

```
"BTO:0000199"
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


