---
title: Biosample
layout: default
permalink: "/schemas/progenetix/Biosample.html"
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
  <h2>Biosample <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/Biosample.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/Biosample.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ A Biosample refers to a unit of biological material from which the substrate molecules (e.g. genomic DNA, RNA, proteins) for molecular analyses (e.g. sequencing, array hybridisation, mass-spectrometry) are extracted. Examples would be a tissue biopsy, a single cell from a culture for single cell genome sequencing or a protein fraction from a gradient centrifugation. Several instances (e.g. technical replicates) or types of experiments (e.g. genomic array as well as RNA-seq experiments) may refer to the same Biosample.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>biocharacteristics</th>
    <td>array of "OntologyClass.yaml#/properties"</td>
  </tr>
  <tr>
    <th>cohorts</th>
    <td>array of "OntologyClass.yaml#/properties"</td>
  </tr>
  <tr>
    <th>dataUseConditions</th>
    <td>OntologyClass.yaml#/properties</td>
  </tr>
  <tr>
    <th>description</th>
    <td>string</td>
  </tr>
  <tr>
    <th>externalReferences</th>
    <td>array of "OntologyClass.yaml#/properties"</td>
  </tr>
  <tr>
    <th>histologicalDiagnosis</th>
    <td>OntologyClass.yaml#/properties</td>
  </tr>
  <tr>
    <th>id</th>
    <td>string</td>
  </tr>
  <tr>
    <th>individualAgeAtCollection</th>
    <td>Age.yaml#/properties</td>
  </tr>
  <tr>
    <th>individualId</th>
    <td>string</td>
  </tr>
  <tr>
    <th>info</th>
    <td>object</td>
  </tr>
  <tr>
    <th>provenance</th>
    <td>Provenance.yaml#/properties</td>
  </tr>
  <tr>
    <th>sampledTissue</th>
    <td>OntologyClass.yaml#/properties</td>
  </tr>
  <tr>
    <th>updated</th>
    <td>string (date-time)</td>
  </tr>

</table>


#### biocharacteristics

* type: array of "OntologyClass.yaml#/properties"



##### `biocharacteristics` Value Examples  

```
{
   "id" : "NCIT:C4029",
   "label" : "Cervical Adenocarcinoma"
}
```
```
{
   "id" : "UBERON:0000002",
   "label" : "uterine cervix"
}
```

#### cohorts

* type: array of "OntologyClass.yaml#/properties"

Cohorts describe collections of samples or individuals which are part of a common epistemic group, e.g. have been used for a study or share a set of features.


##### `cohorts` Value Example  

```
{
   "id" : "pgxcohort-arraymap",
   "label" : "arrayMap collection"
}
```

#### dataUseConditions

* type: OntologyClass.yaml#/properties




#### description

* type: string



##### `description` Value Examples  

```
"breast carcinoma"
```
```
"adenocarcinoma [cell line HeLa]"
```

#### externalReferences

* type: array of "OntologyClass.yaml#/properties"



##### `externalReferences` Value Example  

```
{
   "id" : "PMID:9892199"
}
```

#### histologicalDiagnosis

* type: OntologyClass.yaml#/properties




#### id

* type: string



##### `id` Value Example  

```
"pgxbs-kftvjtgm"
```

#### individualAgeAtCollection

* type: Age.yaml#/properties




#### individualId

* type: string



##### `individualId` Value Example  

```
"pgxind-kftx5ruq"
```

#### info

* type: object




#### provenance

* type: Provenance.yaml#/properties




#### sampledTissue

* type: OntologyClass.yaml#/properties




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


