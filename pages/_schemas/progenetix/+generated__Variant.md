---
title: Variant
layout: default
permalink: "/schemas/progenetix/Variant.html"
sb_status: "community"
excerpt_separator: <!--more-->
category:
  - schemas
tags:
  - Progenetix
  - specification
  - community
  - code
  - schemas
---

<div id="schema-header-title">
  <h2>Variant <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/Variant.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/Variant.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ Genomic variant, representing a sequence variation on a single genomic allele or a structural modification (e.g. copy number variation or LOH). In contrast to the use in e.g. VCF, multi-allelic alterations are reported as single variants.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>alternateBases</th>
    <td>string</td>
  </tr>
  <tr>
    <th>biosampleId</th>
    <td>string</td>
  </tr>
  <tr>
    <th>callsetId</th>
    <td>string</td>
  </tr>
  <tr>
    <th>digest</th>
    <td>string</td>
  </tr>
  <tr>
    <th>end</th>
    <td>integer</td>
  </tr>
  <tr>
    <th>externalReferences</th>
    <td>array of "./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]"</td>
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
    <th>mateName</th>
    <td>string</td>
  </tr>
  <tr>
    <th>referenceBases</th>
    <td>string</td>
  </tr>
  <tr>
    <th>referenceName</th>
    <td>string</td>
  </tr>
  <tr>
    <th>start</th>
    <td>integer</td>
  </tr>
  <tr>
    <th>updated</th>
    <td>string (date-time)</td>
  </tr>
  <tr>
    <th>variantType</th>
    <td>string</td>
  </tr>

</table>


#### alternateBases

* type: string



##### `alternateBases` Value Example  

```
"GC"
```

#### biosampleId

* type: string



##### `biosampleId` Value Example  

```
"pgxbs-kftvjtgm"
```

#### callsetId

* type: string



##### `callsetId` Value Example  

```
"pgxcs-kftvldsu"
```

#### digest

* type: string

The `digest` patrameter represents a compact concatenation of the essential variant parameters, limited to positional information and either variant type or the combination of reference and alternate bases. Variants which contain a sequence of nucleotides are represented without variant type. The `digest` parameter allows the efficient recovery of "identical" allelic alteration events.


##### `digest` Value Examples  

```
"11:52900000-134452384:DEL"
```
```
"4:55133558:A>G"
```

#### end

* type: integer



##### `end` Value Example  

```
134452384
```

#### externalReferences

* type: array of "./OntologyClass.yaml#/properties [<a href="./OntologyClass.html">HTML</a>]"



##### `externalReferences` Value Example  

```
{
   "id" : "clinvar:163840",
   "type" : "Clinvar variant"
}
```

#### id

* type: string

An internal variant id.


##### `id` Value Example  

```
"pgxvar-kftzldsu"
```

#### info

* type: object



##### `info` Value Example  

```
{
   "cnv_value" : "3",
   "var_length" : "81552384"
}
```

#### mateName

* type: string

An optional second chromosome, indicating the fusion partner in translocation events.


##### `mateName` Value Example  

```
"X"
```

#### referenceBases

* type: string



##### `referenceBases` Value Examples  

```
"A"
```
```
"CGT"
```

#### referenceName

* type: string



##### `referenceName` Value Example  

```
"11"
```

#### start

* type: integer



##### `start` Value Example  

```
52900000
```

#### updated

* type: string (date-time)



##### `updated` Value Example  

```
"2018-09-26 09:50:51.957159"
```

#### variantType

* type: string



##### `variantType` Value Example  

```
"DEL"
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


