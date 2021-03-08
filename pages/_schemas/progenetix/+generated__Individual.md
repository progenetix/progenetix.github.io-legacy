---
title: Individual
layout: default
permalink: "/schemas/progenetix/Individual.html"
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
  <h2>Individual <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/Individual.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/Individual.yaml" target="_BLANK">Github</a></li>
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
    <th>ancestries</th>
    <td>array of "./Ancestry.yaml#/properties [<a href="./Ancestry.html">HTML</a>]"</td>
  </tr>
  <tr>
    <th>biocharacteristics</th>
    <td>array of "./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]"</td>
  </tr>
  <tr>
    <th>dataUseConditions</th>
    <td>./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>dateOfBirth</th>
    <td>string (date-time)</td>
  </tr>
  <tr>
    <th>description</th>
    <td>string</td>
  </tr>
  <tr>
    <th>externalReferences</th>
    <td>array of "./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]"</td>
  </tr>
  <tr>
    <th>genotypicSex</th>
    <td>./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]</td>
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
    <th>karyotypicSex</th>
    <td>string</td>
  </tr>
  <tr>
    <th>provenance</th>
    <td>./Provenance.yaml#/properties [<a href="./Provenance.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>updated</th>
    <td>string (date-time)</td>
  </tr>

</table>


#### ancestries

* type: array of "./Ancestry.yaml#/properties [<a href="./Ancestry.html">HTML</a>]"




#### biocharacteristics

* type: array of "./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]"



##### `biocharacteristics` Value Examples  

```
{
   "id" : "NCIT:C142079",
   "label" : "Limb-girdle muscular dystrophy type 2A"
}
```
```
{
   "id" : "NCIT:C3969",
   "label" : "Xeroderma pigmentosum, complementation group G"
}
```

#### dataUseConditions

* type: ./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]



##### `dataUseConditions` Value Example  

```
{
   "id" : "DUO:0000004",
   "label" : "no restriction"
}
```

#### dateOfBirth

* type: string (date-time)



##### `dateOfBirth` Value Examples  

```
"1967-11-11"
```
```
"2002-09-21"
```

#### description

* type: string



##### `description` Value Example  

```
"HapMap project contributor"
```

#### externalReferences

* type: array of "./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]"



##### `externalReferences` Value Examples  

```
{
   "id" : "biosample:SAME122868",
   "label" : "HapMap individual"
}
```
```
{
   "id" : "PMID:9950502"
}
```
```
{
   "id" : "geo:GSE13331",
   "label" : "Prognostic analysis of mantle cell lymphoma genomes"
}
```

#### genotypicSex

* type: ./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]



##### `genotypicSex` Value Examples  

```
{
   "id" : "PATO:0020002",
   "label" : "female genotypic sex"
}
```
```
{
   "id" : "PATO:0020001",
   "label" : "male genotypic sex"
}
```

#### id

* type: string

The resource-local identifier for this individual.


##### `id` Value Example  

```
"pgxind-kftx25eh"
```

#### info

* type: object




#### karyotypicSex

* type: string

Chromosomal sex of an individual as being used by Phenopackets. Following the definition there



#### provenance

* type: ./Provenance.yaml#/properties [<a href="./Provenance.html">HTML</a>]




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


