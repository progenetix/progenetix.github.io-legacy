---
title:  "Progenetix Publication Collection"
layout: default
excerpt_link: https://progenetix.org/publications/list
permalink: /publications.html
excerpt_separator: <!--more-->
category:
  - pages
  - publications
tags:
  - .stale
---

## {{ page.title }}

This page lists articles describing whole genome screening (WGS, WES, aCGH, cCGH) experiments in cancer, registered in the Progenetix publication collection.

<!--more-->

**The new version of this page is in the new 2020 website, online at
at <https://progenetix.org/data-visualization-upload>!**

Please [contact us](mailto:contact@progenetix.org) to alert us about additional articles you are aware of.

A [separate page](/publications-pgxdata.html) lists only articles with corresponding genome profiles in the Progenetix sample collection.

<script type="text/javascript">
  var publication_filters = "counts.genomes:>0";
</script>

<script type="text/javascript" src="/assets/js/datatables.min.js"></script>
<script type="text/javascript" src="/assets/js/dataTables.pageResize.min.js"></script>
<script type="text/javascript" src="/assets/js/pgxjs/publication-table.js"></script>
<link rel="stylesheet" href="/assets/css/datatables.min.css">

<div id="filter-note" style="margin-bottom: 20px;"> </div>

<table id="progenetix-publication-table" class="compact stripe small hover" style="" >
<thead>
	<tr>
		<th rowspan="2"></th>
		<th rowspan="2">Publication</th>
		<th colspan="4">Samples</th>
	</tr>
	<tr>
		<th>cCGH</th>
		<th>aCGH</th>
		<th>WES</th>
		<th>WGS</th>
	</tr>
</thead>

</table>
