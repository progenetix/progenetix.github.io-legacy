---
title: HierarchyPath
layout: default
permalink: "/schemas/progenetix/HierarchyPath.html"
sb_status: "community"
excerpt_separator: <!--more-->
category:
  - schemas
tags:
  - schemas
  - Progenetix
  - specification
  - community
  - code
---

<div id="schema-header-title">
  <h2>HierarchyPath <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
    <th>Source (v2020-12-08)</th>
    <td>
      <ul>
        <li><a href="current/HierarchyPath.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/HierarchyPath.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ A path from the root of a hierarchy to - and including - a given term id.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>depth</th>
    <td>integer</td>
  </tr>
  <tr>
    <th>order</th>
    <td>integer</td>
  </tr>
  <tr>
    <th>path</th>
    <td>array of ""</td>
  </tr>

</table>


#### depth

* type: integer

The number of codes on the path upstream of the term.



#### order

* type: integer

The position in a rooted hierarchy, where each branch ends on a separate line.



#### path

* type: array of ""

All ordered terms of this path, starting from the root term and ending with, and including, the current term.


<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


