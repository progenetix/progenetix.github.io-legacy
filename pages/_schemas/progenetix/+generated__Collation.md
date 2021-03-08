---
title: Collation
layout: default
permalink: "/schemas/progenetix/Collation.html"
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
  <h2>Collation <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/Collation.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/Collation.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ A Collation summarizes information of all biosamples matching a given term (e.g. PMID or NCIT code), as well as the connected items if the code is part of a hierarchy (paths leading to the code, child terms).

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>childTerms</th>
    <td>array of ""</td>
  </tr>
  <tr>
    <th>codeMatches</th>
    <td>integer</td>
  </tr>
  <tr>
    <th>count</th>
    <td>integer</td>
  </tr>
  <tr>
    <th>hierarchyPaths</th>
    <td>array of "./HierarchyPath.yaml#/properties [<a href="./HierarchyPath.html">HTML</a>]"</td>
  </tr>
  <tr>
    <th>id</th>
    <td>string</td>
  </tr>
  <tr>
    <th>label</th>
    <td>string</td>
  </tr>

</table>


#### childTerms

* type: array of ""

All downstream terms of this term in a hierarchical system.



#### codeMatches

* type: integer

The number of biosamples in the collection with this code. This can be 0 if the entity is only represented through its child terms.



#### count

* type: integer

The number of biosamples in the collection with this code or one of its child terms.



#### hierarchyPaths

* type: array of "./HierarchyPath.yaml#/properties [<a href="./HierarchyPath.html">HTML</a>]"

All term paths leading to any instance of this code from the hierarchy root term.



#### id

* type: string



##### `id` Value Example  

```
"NCIT:C9272"
```

#### label

* type: string



##### `label` Value Example  

```
"Salivary Gland Carcinoma"
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


