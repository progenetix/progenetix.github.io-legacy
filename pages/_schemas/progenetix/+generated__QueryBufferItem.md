---
title: QueryBufferItem
layout: default
permalink: "/schemas/progenetix/QueryBufferItem.html"
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
  <h2>QueryBufferItem <span id="schema-header-title-project">schemas <a href="https://github.com/progenetix/schemas" target="_BLANK">&nearr;</a></span> </h2>
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
        <li><a href="current/QueryBufferItem.json" target="_BLANK">raw source [JSON]</a></li>
        <li><a href="https://github.com/progenetix/schemas/blob/master/schemas/QueryBufferItem.yaml" target="_BLANK">Github</a></li>
      </ul>
    </td>
  </tr>
</table>

<div id="schema-attributes-title">
  <h3>Attributes</h3>
</div>

  
__Description:__ This schema represents objects for the temporary storage of Progenetix / bycon
query results.

### Properties

<table id="schema-properties-table">
  <tr>
    <th>Property</th>
    <th>Type</th>
  </tr>
  <tr>
    <th>id</th>
    <td>string</td>
  </tr>
  <tr>
    <th>sourceCollection</th>
    <td>string</td>
  </tr>
  <tr>
    <th>sourceDb</th>
    <td>string</td>
  </tr>
  <tr>
    <th>sourceKey</th>
    <td>string</td>
  </tr>
  <tr>
    <th>targetCollection</th>
    <td>string</td>
  </tr>
  <tr>
    <th>targetCount</th>
    <td>integer</td>
  </tr>
  <tr>
    <th>targetKey</th>
    <td>string</td>
  </tr>
  <tr>
    <th>targetValues</th>
    <td>array of "string"</td>
  </tr>

</table>


#### id

* type: string

The unique identifier of this query result object in string format, e.g.
as a UUID v4.


##### `id` Value Example  

```
"37cff434-2c4d-11eb-827a-c21bd2cbdf2b"
```

#### sourceCollection

* type: string

The gatabase collection that was queried to gather the response items.


##### `sourceCollection` Value Example  

```
"callsets"
```

#### sourceDb

* type: string

The name of the database the query belongs to.


##### `sourceDb` Value Example  

```
"progenetix"
```

#### sourceKey

* type: string

The key in the sourceCollection that provided the response values stored
in this QueryBufferItem.



#### targetCollection

* type: string

The database collection that should be queried with the targetValues.


##### `targetCollection` Value Example  

```
"biosamples"
```

#### targetCount

* type: integer




#### targetKey

* type: string

The key in the targetCollection that should be used for creating a query
against, using the targetValues.


##### `targetKey` Value Examples  

```
"_id"
```
```
"id"
```
```
"biosample_id"
```

#### targetValues

* type: array of "string"

The identifiers (e.g. biosample_id values or _id ObjectId values) used to retrieve tha data through matching them to the targetKey in the targetCollection. NOTE - While the type here is given as string they may also be internal identifiers such as MongoDB ObjectId entries.

<div id="schema-footer">
This schema representation is for information purposes. The authorative 
version remains with the developing project (see "provenance").
</div>


