---
title: 'Previous API Notes (Deprecated)'
date: 2014-04-01
layout: default
category:
  - documentation
tags: 
  - recovered
  - progenetix
  - arraymap
  - guide
  - code
  - api
---

## {{ page.title }}

#### 2013-11-12

New option: Publication based sample map from article data using"collection=publications"; e.g.:

[http://www.progenetix.org/cgi-bin/api.cgi?project=progenetix&mapwidth=1024&output=map&locscale=1&collection=publications](http://www.progenetix.org/cgi-bin/api.cgi?project=progenetix&mapwidth=1024&output=map&locscale=1&collection=publications)

While sample mapping described below is based on samples with data in Progenetix or arrayMap, the use of "collection=publications" will query the publication database, including also aCGH/cCGH publications for which no sample data is available, but for which we have extracted supposed sample numbers from the articles' texts.


Possible publication search tags:

* author_m (multiple, "OR" treated; e.g. author_m=Lichter&author_m=Beroukhim)
* text_m (multiple, "OR" treated; e.g. text_m=medulloblast&text_m=neuroblast)
* pmid_m (multiple, "OR" treated; e.g. pmid_m=123&pmid_m=678)
* techniques_m (though multiple, only 2 options; aCGH, cCGH; and empty=both)


#### 2013-11-08

New option: sample map; e.g.:

* output=map (options: mapwidth, mapheight, locscale)

    [http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&project=progenetix&mapwidth =1024&output=map&locscale=3](http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&project=progenetix&mapwidth=1024&output=map&locscale=3)

... provides a Google Maps interface showing the location of submitters (corresponding author's institutions) of the publications including samples for the query.

This will be based on data included in the database, not on all published a/cCGH samples!

Please note in the example the relatively large amount of data from East Asia;  ICDO3=8170 is hepatocellular ca.



#### 2013-06-13

New option: samplematrix; e.g.:

* output=samplematrix

    [http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&imgFormat=svg&project=progenetix&output=samplematrix](http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&imgFormat=svg&project=progenetix&output=samplematrix)  

... will plot all individual samples (sorted by their ID; as of now, for clustering etc., one has to go through the browser ...).



#### 2013-02-18

Change: Standard plot format is nom <b>PNG</b>. SVG images can be called by adding "&imgFormat=svg" to the call.

Examples:

* PNG  (hepatocellular carcinoma from default=Progenetix database)

    http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3

* SVG

    [http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&imgFormat=svg](http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&imgFormat=svg)

* SVG with regional links to the UCSC browser

   [http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&imgFormat=svg&plotLinks=1](http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&imgFormat=svg&plotLinks=1)

* SVG of a random 50 sample subset of ICD-O 3 8170/3

    http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&imgFormat=svg&plotLinks=1&randSampleNo=50

#### 2013-02-07

We now provide real-time copy number frequency plots, for both our Progenetix and arrayMap collections. At this time, the API calls will deliver SVG images only; they are the qualitatively best solution (scalable, clickable, embeddable ...), but may fail in ancient browsers - please use recent editions of Safari/Firefox/Chrome etc.

The link structure is shown below. We'll try to keep this stable; however, please let us know if implementing these links in production environments. And please follow our Twitter feed <a href="http://www.twitter.com/progenetix" target="_NEW">@progenetix</a>.

Since the plots are generated in real-time and are rather complex (i.e. >1MB for a histoplot with 1Mb resolution), it may take some seconds until the image is returned & interpreted.

The base constructor starts with 

    http://www.arraymap.org/cgi-bin/api.cgi?

or

    http://www.progenetix.org/cgi-bin/api.cgi?

... followed by one of the required base parameters

* ICDO3=nnnn/n
* PMID=nnnnnnnn
* SERIESID=xxxxxxxxxx

Please note that the keys (ICDO3 ...) are all CAPS, and that the values have to be full matches to existing parameters in Progenetix or arrayMap. 

Scope: Data is queried in the scope of either the Progenetix or arrayMap collection, and will default to Progenetix (but for the SERIESID to arrayMap).

Correct minimal query examples would be:

* [http://www.arraymap.org/cgi-bin/api.cgi?PMID=22824167&project=arraymap](http://www.arraymap.org/cgi-bin/api.cgi?PMID=22824167&project=arraymap)
* [http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&project=progenetix](http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&project=progenetix)
* [http://www.arraymap.org/cgi-bin/api.cgi?SERIESID=GSE6109](http://www.arraymap.org/cgi-bin/api.cgi?SERIESID=GSE6109)


####Plot options

The standard return will be a histogram of genomic gains/losses (chromosomes 1-22)  in the selected dataset, in the format of an SVG vector plot. Other options can be chosen by adding a query parameter "plot", with one of the values"

* adding "&plot=ideogram" will produce CNA frequencies in a standard chromosomal ideogram arrangement
* adding "&plot=chr8" (with "8" being one of the chromosomes) will just deliver this chromosome in an upright gain/loss frequency plot - basically a cut-out from the histogram
* adding "&plotLinks=1" will produce an SVG, in which each interval is linked to the UCSC genome browser; however, the image size will increase dramatically (for a histoplot from ~250kb to 1.5Mb)
* adding "&chr2plot=8,11" to the histoplot (or without plot selection) will produce a histoplot of all the comma separated chromosomes; if less than 3 of those, the image will default to the "linked" version

Examples:

* [http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&plot=chr3&project=progenetix](http://www.progenetix.org/cgi-bin/api.cgi?ICDO3=8170/3&plot=chr3&project=progenetix)
* [http://www.arraymap.org/cgi-bin/api.cgi?SERIESID=GSE6109&plot=ideogram](http://www.arraymap.org/cgi-bin/api.cgi?SERIESID=GSE6109&plot=ideogram)
* [http://www.arraymap.org/cgi-bin/api.cgi?SERIESID=GSE6109&chr2plot=8,11](http://www.arraymap.org/cgi-bin/api.cgi?SERIESID=GSE6109&chr2plot=8,11)

</div>

