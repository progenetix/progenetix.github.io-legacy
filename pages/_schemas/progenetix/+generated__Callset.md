---
title: Callset
layout: default
permalink: "/schemas/progenetix/Callset.html"
sb_status: "community"
excerpt_separator: <!--more-->
category:
  - schemas
tags:
  - Progenetix
  - code
  - community
  - schemas
  - specification
---

<div id="schema-header-title">
  <h2>Callset <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
    <th>Source (v2021-03-05)</th>
    <td>
      <ul>
        <li><a href="current/Callset.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/Callset.yaml" target="_BLANK">Github</a></li>
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
    <th>biosampleId</th>
    <td>string</td>
  </tr>
  <tr>
    <th>dataUseConditions</th>
    <td>OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>description</th>
    <td>string</td>
  </tr>
  <tr>
    <th>externalReferences</th>
    <td>array of "OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]"</td>
  </tr>
  <tr>
    <th>id</th>
    <td>string</td>
  </tr>
  <tr>
    <th>info</th>
    <td>object</td>
  </tr>
  <tr>
    <th>provenance</th>
    <td>Provenance.yaml#/properties [<a href="./Provenance.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>updated</th>
    <td>string (date-time)</td>
  </tr>

</table>


#### biosampleId

* type: string



##### `biosampleId` Value Example  

```
"pgxbs-kftva59y"
```

#### dataUseConditions

* type: OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]




#### description

* type: string



##### `description` Value Example  

```
"SNP6 array"
```

#### externalReferences

* type: array of "OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]"



##### `externalReferences` Value Example  

```
{
   "type" : {
      "id" : "geo:GSM224836"
   }
}
```

#### id

* type: string



##### `id` Value Example  

```
"pgxcs-kftvldsu"
```

#### info

* type: object




#### provenance

* type: Provenance.yaml#/properties [<a href="./Provenance.html">HTML</a>]




#### updated

* type: string (date-time)



##### `updated` Value Example  

```
"2020-09-10T17:44:10.170Z"
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


