---
title:  "Progenetix Oncogenomic Knowledge Resource"
layout: default
excerpt_link: https://progenetix.org
permalink: /progenetix.html
excerpt_separator: <!--more-->
category:
  - pages
tags:
  - data
  - documentation
  - tools
---

## {{ page.title }}


The Progenetix database provides an overview of copy number
abnormalities in human cancer.

<!--more-->

The resource currently contains data from <b><span id="progenetix__biosamples__count"> </span></b> array and chromosomal [Comparative Genomic Hybridization (CGH)](http://en.wikipedia.org/wiki/Comparative_genomic_hybridization) experiments, as well as Whole Genome or Whole Exome Sequencing (WGS, WES) studies.

The cancer profile data in  Progenetix was curated from <b><span id="progenetix__biosamples__distincts_count_pubmed"> </span> </b> articles and represents <b><span id="progenetix__biosamples__distincts_count_icdom"> </span> </b> and  <b><span id="progenetix__biosamples__distincts_count_ncit"> </span> </b> different cancer types, according to the International classification of Diseases in Oncology (ICD-O) and NCIt "neoplasm" classification, respectively.


Additionally, the website attempts to identify and present all publications (currently <b><span id="progenetix__publications__count"> </span></b> articles), referring to cancer genome
profiling experiments.
The database &amp; software are developed by the [Baudisgroup](http://info.baudisgroup.org) at the [University of Zurich](http://www.uzh.ch).

<div id="histosvg"> </div>

<div id="histolegend" style="text-align: center; font-size: 0.9em;"> </div>

<script type="text/javascript">

	$.getJSON( "/cgi-bin/dbstats.cgi?db=progenetix", function( data ) {

		$('#progenetix__biosamples__count').html( data.progenetix__publications.count );
		$('#progenetix__biosamples__distincts_count_pubmed').html( data.progenetix__biosamples.distincts_count_pubmed );
		$('#progenetix__biosamples__distincts_count_ncit').html( data.progenetix__biosamples.distincts_count_ncit );
		$('#progenetix__biosamples__distincts_count_icdom').html( data.progenetix__biosamples.distincts_count_icdom );
		$('#progenetix__publications__count').html( data.progenetix__publications.count );

	}, 'json');

	var examples 	= [
		"filters=NCIT:C4349",
		"filters=NCIT:C4017",
		"filters=icdom-85003",
		"filters=icdot-C50.9",
		"filters=PMID:22824167"
	];
	var randEx 		= examples[Math.floor(Math.random()*examples.length)]

	var width	=	$("section").width();
	var query = "/cgi-bin/pgx_subsethistogram.cgi/?"+randEx+"&datasetIds=progenetix"+"&-size_plotimage_w_px="+width;
	$("#histosvg").load(query);

	$('#histolegend').html( "Frequency of genomic copy number aberrations in an example subset ("+randEx.replace("filters=", "")+")." );


</script>
