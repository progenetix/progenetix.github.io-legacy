---
title: OntologyClass
layout: default
permalink: "/schemas/progenetix/OntologyClass.html"
sb_status: "community"
excerpt_separator: <!--more-->
category:
  - schemas
tags:
  - schemas
  - community
  - code
  - specification
  - Progenetix
---

<div id="schema-header-title">
  <h2>OntologyClass <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
    <th>Source (v2021-01-12)</th>
    <td>
      <ul>
        <li><a href="current/OntologyClass.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/OntologyClass.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Type:__ object  
__Description:__ The `OntologyClass` object is the main wrapper for identifiers, used for well-formed CURIE representations of ontology classes for biological or technical concepts and knowledge resources, as well as for "private" identifiers such as internal classifications. 

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>description</th>
    <td>string</td>
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


#### description

* type: string



##### `description` Value Example  

```
"adenocarcinoma sample from right colonic flexure"
```

#### id

* type: string

Identifier as string (CURIE highly recommended). 


##### `id` Value Examples  

```
"UBERON:0000002"
```
```
"PMID:9892199"
```
```
"icdom-85003"
```

#### label

* type: string



##### `label` Value Examples  

```
"neoplastic sample"
```
```
"Adenocarcinoma, NOS"
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


