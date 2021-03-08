---
title: Provenance
layout: default
permalink: "/schemas/progenetix/Provenance.html"
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
  <h2>Provenance <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
    <th>Source (v2021-01-19)</th>
    <td>
      <ul>
        <li><a href="current/Provenance.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/Provenance.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ The Provenance class is the wrapper object for schemas informing about technical, geographic or collection associated origin of a higher oreder object such as an Individual or Biosample.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>assay</th>
    <td>./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>geo</th>
    <td>./GeoLocation.yaml#/properties [<a href="./GeoLocation.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>material</th>
    <td>./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]</td>
  </tr>

</table>


#### assay

* type: ./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]



##### `assay` Value Examples  

```
{
   "id" : "EFO:0002703",
   "label" : "SNP array"
}
```
```
{
   "id" : "EFO:0010938",
   "label" : "large-insert clone DNA microarray"
}
```
```
{
   "id" : "EFO:0010939",
   "label" : "oligonucleotide DNA microarray"
}
```
```
{
   "id" : "EFO:0010937",
   "label" : "comparative genomic hybridization (CGH)"
}
```

#### geo

* type: ./GeoLocation.yaml#/properties [<a href="./GeoLocation.html">HTML</a>]




#### material

* type: ./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]



##### `material` Value Examples  

```
{
   "id" : "EFO:0009656",
   "label" : "neoplastic sample"
}
```
```
{
   "id" : "EFO:0009654",
   "label" : "reference sample"
}
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


