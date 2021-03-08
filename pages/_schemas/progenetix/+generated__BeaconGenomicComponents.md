---
title: BeaconGenomicComponents
layout: default
permalink: "/schemas/progenetix/BeaconGenomicComponents.html"
sb_status: "community"
excerpt_separator: <!--more-->
category:
  - schemas
tags:
  - BeaconV2
  - schemas
  - community
  - code
  - specification
  - Progenetix
---

<div id="schema-header-title">
  <h2>BeaconGenomicComponents <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/BeaconGenomicComponents.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/BeaconGenomicComponents.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>


### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>Assembly</th>
    <td>string</td>
  </tr>
  <tr>
    <th>Chromosome</th>
    <td>string</td>
  </tr>

</table>


#### Assembly

* type: string

Assembly identifier (GRC notation, e.g. GRCh37).


##### `Assembly` Value Example  

```
"GRCh38"
```

#### Chromosome

* type: string

Reference name (chromosome). Accepting values 1-22, X, Y, MT.


##### `Chromosome` Value Examples  

```
"7"
```
```
"X"
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


