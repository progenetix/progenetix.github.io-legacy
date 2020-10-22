---
title: 'Linking - (deprecated))'
date: 2012-03-23
layout: default
category:
  - howto
tags:
  - recovered
  - progenetix
  - guide
---

## {{ page.title }}

Old style linking has been deprecated - please follow the API information!

----------------------------------------------------

#### Most of the information below is outdated and only available for historic reasons.

<p>Links to Progenetix should always use the base "www.progenetix.org", never specific IP-addresses (which are bound to change). Also, many pages/image files may become moved or renamed. Below are some notes.
</p>
<div class='vspace'></div><h3>1. Locus Score</h3>
<p><a class='urllink' href='http://www.progenetix.org/cgi-bin/pgLocusScorer.cgi?multiRegionMatch=1p36:1' rel='nofollow'>http://www.progenetix.org/cgi-bin/pgLocusScorer.cgi?multiRegionMatch=1p36:1</a><br />
</p><pre> lists entities with a gain involving 1p36
 1=gain, -1=loss, 9=any
 one can use GP annotation (e.g. chr2:15,998,134-16,004,580:1 fuer MYCN)
</pre><p class='vspace'>Values/ranking is calculated on the fly per case (we could use a score matrix, but then we would be limited to defined intervals).
</p>
<div class='vspace'></div><h3>2. ICD-O entities</h3>
<p>... can be linked directly; e.g.
</p>
<p class='vspace'><a class='urllink' href='http://www.progenetix.org/I84903/' rel='nofollow'>http://www.progenetix.org/I84903/</a>
<br />will link to ICD-O 8490/3 (Signet ring cell carcinoma).As well,
</p>
<p class='vspace'><a class='urllink' href='http://www.progenetix.org/I84903/chr8.pdf' rel='nofollow'>http://www.progenetix.org/I84903/chr8.pdf</a><br /><a class='urllink' href='http://www.progenetix.org/I84903/chr8.png' rel='nofollow'>http://www.progenetix.org/I84903/chr8.png</a><br /><a class='urllink' href='http://www.progenetix.org/I84903/histoplot.pdf' rel='nofollow'>http://www.progenetix.org/I84903/histoplot.pdf</a><br /><a class='urllink' href='http://www.progenetix.org/I84903/histoplot.png' rel='nofollow'>http://www.progenetix.org/I84903/histoplot.png</a><br /><br />link to the respective plots in web (PNG) and print (PDF) format.
</p>
<div class='vspace'></div><h3>3. PMIDs</h3>
<p><a class='urllink' href='http://www.progenetix.org/P20013897/' rel='nofollow'>http://www.progenetix.org/P20013897/</a><br /><br />... etc. However, there are many information pages for publications without available data/plots, e.g.
</p>
<p class='vspace'><a class='urllink' href='http://www.progenetix.org/P19627613/' rel='nofollow'>http://www.progenetix.org/P19627613/</a><br /><br />
</p><h3>4. Loci</h3>
<p><a class='urllink' href='http://www.progenetix.org/LC32/' rel='nofollow'>http://www.progenetix.org/LC32/</a><br /><br />... e.g. links to Larynx. However, although the codes are based on ICD locus topography, the code selection is a bit arbitrary and follows the amount of available data (e.g. most soft tissue tumors are mapped to "connective and soft tissue" instead of specific loci - upper arm, ...).
</p>
<div class='vspace'></div><h3>5. Clinical entities</h3>
<p>... are defined as mix of ICD-O entities and locus (e.g. any carcinoma of the breast tissue => "Ca.: breast ca."). Since the annotation may change, one shouldn't use hard links to these.
</p>
