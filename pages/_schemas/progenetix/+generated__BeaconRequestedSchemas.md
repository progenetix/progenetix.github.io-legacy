---
title: BeaconRequestedSchemas
layout: default
permalink: "/schemas/progenetix/BeaconRequestedSchemas.html"
sb_status: "community"
excerpt_separator: <!--more-->
category:
  - schemas
tags:
  - BeaconV2
  - Progenetix
  - code
  - community
  - schemas
  - specification
---

<div id="schema-header-title">
  <h2>BeaconRequestedSchemas <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
<li><a href="https://github.com/jrambla">Jordi Rambla</a></li>
<li><a href="https://github.com/sdelatorrep">Sabele de la Torre</a></li>
<li><a href="https://github.com/mamanambiya">Mamana Mbiyavanga</a></li>
<li><a href="https://orcid.org/0000-0002-9903-4248">Michael Baudis</a></li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Source (v2021-03-07)</th>
    <td>
      <ul>
        <li><a href="current/BeaconRequestedSchemas.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/BeaconRequestedSchemas.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Type:__ object  
__Description:__ Format of the responses and version of the Beacon handling this request.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>Analysis</th>
    <td>string</td>
  </tr>
  <tr>
    <th>Biosample</th>
    <td>string</td>
  </tr>
  <tr>
    <th>Individual</th>
    <td>string</td>
  </tr>
  <tr>
    <th>Interactor</th>
    <td>string</td>
  </tr>
  <tr>
    <th>Run</th>
    <td>string</td>
  </tr>
  <tr>
    <th>VariantAnnotation</th>
    <td>string</td>
  </tr>
  <tr>
    <th>VariantIdentification</th>
    <td>string</td>
  </tr>
  <tr>
    <th>VariantInSample</th>
    <td>string</td>
  </tr>
  <tr>
    <th>VariantInterpretation</th>
    <td>string</td>
  </tr>

</table>


#### Analysis

* type: string



##### `Analysis` Value Example  

```
"beacon-analysis-draft-2"
```

#### Biosample

* type: string



##### `Biosample` Value Example  

```
"ga4gh-schemablocks-biosample-v0.1"
```

#### Individual

* type: string



##### `Individual` Value Example  

```
"ga4gh-phenopacket-individual-v0.1"
```

#### Interactor

* type: string



##### `Interactor` Value Example  

```
"beacon-interactor-draft-2"
```

#### Run

* type: string



##### `Run` Value Example  

```
"beacon-run-draft-2"
```

#### VariantAnnotation

* type: string



##### `VariantAnnotation` Value Example  

```
"beacon-variant-annotation-draft-2"
```

#### VariantIdentification

* type: string



##### `VariantIdentification` Value Example  

```
"ga4gh-variant-representation-v0.1"
```

#### VariantInSample

* type: string



##### `VariantInSample` Value Example  

```
"beacon-variant-in-sample-draft-2"
```

#### VariantInterpretation

* type: string



##### `VariantInterpretation` Value Example  

```
"beacon-variant-interpretation-draft-2"
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


