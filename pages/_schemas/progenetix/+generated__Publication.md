---
title: Publication
layout: default
permalink: "/schemas/progenetix/Publication.html"
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
  <h2>Publication <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/Publication.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/Publication.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ A Publication represents basic information about a scientific article used in the Progenetix resource to indicate and annotate sources for genomic screening experiments.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>abstract</th>
    <td>string</td>
  </tr>
  <tr>
    <th>affiliation</th>
    <td>string</td>
  </tr>
  <tr>
    <th>authors</th>
    <td>string</td>
  </tr>
  <tr>
    <th>contact</th>
    <td>string</td>
  </tr>
  <tr>
    <th>email</th>
    <td>string</td>
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
    <th>journal</th>
    <td>string</td>
  </tr>
  <tr>
    <th>label</th>
    <td>string</td>
  </tr>
  <tr>
    <th>note</th>
    <td>string</td>
  </tr>
  <tr>
    <th>pmcid</th>
    <td>string</td>
  </tr>
  <tr>
    <th>provenance</th>
    <td>Provenance.yaml#/properties [<a href="./Provenance.html">HTML</a>]</td>
  </tr>
  <tr>
    <th>pubmedid</th>
    <td>string</td>
  </tr>
  <tr>
    <th>status</th>
    <td>string</td>
  </tr>
  <tr>
    <th>title</th>
    <td>string</td>
  </tr>
  <tr>
    <th>updated</th>
    <td>string (date-time)</td>
  </tr>
  <tr>
    <th>year</th>
    <td>string</td>
  </tr>

</table>


#### abstract

* type: string




#### affiliation

* type: string




#### authors

* type: string



##### `authors` Value Example  

```
"Weber RG, Bostrom J, Wolter M, Baudis M, Collins VP, Reifenberger G, Lichter P."
```

#### contact

* type: string

Name of contact (e.g. corresponding author). TODO: With email, affiliation ... into new address schema, in provenance?



#### email

* type: string




#### id

* type: string



##### `id` Value Example  

```
"PMID:22824167"
```

#### info

* type: object




#### journal

* type: string



##### `journal` Value Example  

```
"Proc. Natl. Acad. Sci. U.S.A. 94(26), 1997"
```

#### label

* type: string

An optional informative shortened concatenation of authors / year / title, to be used for labels etc.


##### `label` Value Example  

```
"Peralta R, Baudis M, Vazquez G, Juarez S, Ortiz R, Decanini et al. (2010): Increased expression of cellular retinol-binding protein 1 in laryngeal squamous cell carcinoma."
```

#### note

* type: string




#### pmcid

* type: string

Id of article in PMC, if there. TODO: into `external_references`?



#### provenance

* type: Provenance.yaml#/properties [<a href="./Provenance.html">HTML</a>]




#### pubmedid

* type: string



##### `pubmedid` Value Example  

```
"22824167"
```

#### status

* type: string




#### title

* type: string




#### updated

* type: string (date-time)



##### `updated` Value Example  

```
"2020-09-10T17:44:10.170Z"
```

#### year

* type: string



##### `year` Value Example  

```
"2021"
```
<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


