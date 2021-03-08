---
title: GeoJSONgeometry
layout: default
permalink: "/schemas/progenetix/GeoJSONgeometry.html"
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
  <h2>GeoJSONgeometry <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
<li><a href="https://orcid.org/0000-0002-9903-4248">Michael Baudis</a></li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Source (v2021-01-23)</th>
    <td>
      <ul>
        <li><a href="current/GeoJSONgeometry.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/GeoJSONgeometry.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ The geographic point object uses the default units from the [DCMI point scheme](http://dublincore.org/documents/dcmi-point/) and avoids optional representation in non-standard units.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>coordinates</th>
    <td>array of "number"</td>
  </tr>
  <tr>
    <th>type</th>
    <td>string</td>
  </tr>

</table>


#### coordinates

* type: array of "number"

An array of 2 (longitude, latitude) or 3 (longitude, latitude, altitude) values.



#### type

* type: string
* value: Point  




<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


