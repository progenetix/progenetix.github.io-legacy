---
title: GeneSpan
layout: default
permalink: "/schemas/progenetix/GeneSpan.html"
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
  <h2>GeneSpan <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/GeneSpan.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/GeneSpan.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ Genomic mapping position of the coding region of a gene.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>end</th>
    <td>integer</td>
  </tr>
  <tr>
    <th>entrezId</th>
    <td>string</td>
  </tr>
  <tr>
    <th>geneSymbol</th>
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

</table>


#### end

* type: integer



##### `end` Value Example  

```
7676593
```

#### entrezId

* type: string



##### `entrezId` Value Example  

```
"7157"
```

#### geneSymbol

* type: string



##### `geneSymbol` Value Example  

```
"TP53"
```

#### referenceName

* type: string



##### `referenceName` Value Example  

```
"17"
```

#### start

* type: integer



##### `start` Value Example  

```
7669608
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


