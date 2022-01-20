# Progenetix Services

The _bycon_ environment provides a number of data services which make use of
resources in the _Progenetix_ environment.

## Formats

### `services.py` and URL Mapping

The service URL format `progenetix.org/services/__service-name__/?parameter=value`
is a shorthand for `progenetix.org/cgi-bin/bycon/services/__service-name__.py?parameter=value`.

### Response formats

Standard responses are provided as `Content-Type: application/json`. The wrapper
format for JSON encoded data follows the standard Beacon response
format where the main data is usually contained in the `response.results` list.

### Image Formats

The standard format for (plot-)images generated on Progenetix is Scalable Vector Graphics ([SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)). As the name implies, SVG is _scalable_, i.e. images can be scaled up without loosing quality or expanding in storage size. However, some of teh generated images use also embedded rastered components which will deteriorate during scaling - this is e.g. the case for array probe plots.

```{admonition} According to [Wikipedia](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)
  All major modern web browsers—including Mozilla Firefox, Internet Explorer, Google Chrome, Opera, Safari, and Microsoft Edge—have SVG rendering support.
```

On most pages where plots are being displayed there is a download option for the images - (please alert us where those are missing). Browsers also have the option to export SVGs themselves e.g. as PDF.

#### The PGX plotting library

Plots on Progenetix are generated using the [PGX package](http://github.com/progenetix/PGX/), a set of Perl libraries for processing and graphical representation of CNV data. The package contains tools to

* read and write e.g. [Progentix segment files](/doc/fileformats.html)
* generate binned status maps
* render plots of sample-specific and aggregate CNV data, such as histograms and CNV frequency heatmaps



## Services

### Cancer Genomics Publications `publications`

The `publications` service serves as backend API for the display of genome
screening publications through the Progenetix [Publications DB](https://progenetix.org/publications/).

It provides articles describing whole genome screening (WGS, WES, aCGH, cCGH) experiments in cancer, including some information about e.g. the numbers of samples analysed with a given technology and if sample profiles are available in Progenetix.

Please contact us to alert us about additional articles you are aware of. The inclusion criteria are described in the [documentation](/publication-collection).

Since 2021 you can now directly submit suggestions for matching publications to the [oncopubs repository on Github](https://github.com/progenetix/oncopubs).

--------------------------------------------------------------------------------

### Cytoband Mapping `cytomapper`

This services parses either:

* a properly formatted cytoband annotation (`assemblyId`, `cytoBands`)
  - "8", "9p11q21", "8q", "1p12qter"
* a concatenated `chroBases` parameter
  - `7:23028447-45000000`
  - `X:99202660`

<!--
While the return object is JSON by default, specifying `text=1`, together with the `cytoBands` or
`chroBases` parameter will return the text version of the opposite.
-->

There is a fallback to *GRCh38* if no assembly is being provided.

The `cytobands` and `chrobases` parameters can be used for running the script on the command line
(see examples below). Please be aware of the "chrobases" (command line) versus "chroBases" (cgi) use.

#### Examples

* retrieve coordinates for some bands on chromosome 8
  - [progenetix.org/services/cytomapper?assemblyId=NCBI36.1&cytoBands=8q24.1](https://progenetix.org/services/cytomapper?assemblyId=NCBI36.1&cytoBands=8q24.1)
* as above, just as text:
  - [progenetix.org/services/cytomapper?assemblyId=NCBI.1&cytoBands=8q&output=text](https://progenetix.org/services/cytomapper?assemblyId=NCBI.1&cytoBands=8q&output=text)
  - *cytomapper shortcut*: [progenetix.org/services/cytomapper/?assemblyId=NCBI36.1&cytoBands=8q&text=1](https://progenetix.org/services/cytomapper/?assemblyId=NCBI36.1&cytoBands=8q&output=text)
* get the cytobands whith which a base range on chromosome 17 overlaps, in short and long form
  - [progenetix.org/services/cytomapper?assemblyId=GRCh37&chroBases=17:800000-24326000](https://progenetix.org/services/cytomapper?assemblyId=GRCh37&chroBases=17:800000-24326000)
* using `curl` to get the text format mapping of a cytoband range, using the API `services` shortcut:
  - `curl -k https://progenetix.org/services/cytomapper?cytoBands\=8q21q24.1&assemblyId\=hg18&text\=1`
* command line version of the above
  - `bin/cytomapper.py --chrobases 17:800000-24326000 -g NCBI36`
  - `bin/cytomapper.py -b 17:800000-24326000`
  - `bin/cytomapper.py --cytobands 9p11q21 -g GRCh38`
  - `bin/cytomapper.py -c Xpterq24`

#### Response

As in other **bycon** `services`, API responses are in JSON format with the main
content being contained in the `response.results` field.

--------------------------------------------------------------------------------

### Gene Coordinates `genespans`

* genomic mappings of gene coordinats
* initially limited to _GRCh38_ and overall CDS extension
* responds to (start-anchored) text input of HUGO gene symbols using the `geneSymbol`
parameter or path value
* returns a list of matching gene objects (see below under __Response Formats__)
* the `filterPrecision=exact` query parameter restricts the response to a single
exact gene symbol match

#### Examples

* [progenetix.org/services/genespans/?geneSymbol=TP53&filterPrecision=exact](https://progenetix.org/services/genespans/?geneSymbol=TP53&filterPrecision=exact)
* [progenetix.org/services/genespans/CDKN2A](https://progenetix.org/services/genespans/CDKN2A)

--------------------------------------------------------------------------------

### Ontology Cross-Mapping (`ontologymaps`)

The `ontologymaps` service provides equivalency mapping between ICD-O and other
classification systems, notably NCIt. The mappings are represented in the [ICDOntologies](https://github.com/progenetix/ICDOntologies) project and accessible trough a front-end in the [Progenetix Services area](https://progenetix.org/service-collection/ontologymaps).

#### ICD-O Representation

Our resources use an internal representation of ICD-O 3 codes since no official CURIES are provided by the IARC. The syntax is:

* ICD-O 3 morphologies
  - "pgx:icdom-"`s/\///`; i.e. number only code
  - "8500/3" => `pgx:icdom-85003`
* ICD-O 3 Topographies
  - "icdot-" + code
  - "C53.9" => `pgx:icdot-C53.9`

#### Parameters

##### `filters`

* required
* comma-concatenated __complete__ codes and/or prefixes
* partial codes (see above for ICD-O syntax) will not be matched unless a relaxed filter precision is indicated

##### `filterPrecision`

* optional
* to allow partial code matches (see examples below)

#### Examples

##### NCIt and ICD-O 3

* [progenetix.org/services/ontologymaps/?filters=pgx:icdom-85003](https://progenetix.org/services/ontologymaps/?filters=pgx:icdom-85003)
* [https://progenetix.org/services/ontologymaps/?filters=NCIT](https://progenetix.org/services/ontologymaps/?filters=NCIT)
* [progenetix.org/services/ontologymaps/?filters=pgx:icdom-85003,pgx:icdot-C50.9](https://progenetix.org/services/ontologymaps/?filters=pgx:icdom-85003,pgx:icdot-C50.9)
* [progenetix.org/services/ontologymaps/?filters=icdom-85,icdot-C50&filterPrecision=start](https://progenetix.org/services/ontologymaps/?filters=icdom-85,icdot-C50&filterPrecision=start)
  - As in the example above, but by stemmming the query parameters and providing the `filterPrecision=start` pragma, the response will now be a list of matched data objects (inputs and equivalents)

##### UBERON and ICD-O 3 Topography

* [progenetix.org/services/ontologymaps/?filters=UBERON&filterPrecision=start](https://progenetix.org/services/ontologymaps/?filters=UBERON&filterPrecision=start)
  - all mappings
* [progenetix.org/services/ontologymaps/?filters=UBERON,icdot-C0&filterPrecision=start](https://progenetix.org/services/ontologymaps/?filters=UBERON,icdot-C0&filterPrecision=start)
  - all `C0...` ICD-O T matches
  - limited to `UBERON` mappings since the prefix was given, too (otherwise all the NCIT mappings would also be listed for these ICD-O T code matches)

#### More Information

* [Web Interface for ICD & NCIT](https://progenetix.org/service-collection/ontologymaps)
* [Interface for ICD & UBERON](https://progenetix.org/service-collection/uberonmaps)

--------------------------------------------------------------------------------

### Public and Local Identifiers `ids`

The `ids` service forwards compatible, prefixed ids (see [`config/ids.yaml`](https://github.com/progenetix/bycon/blob/master/services/config/ids.yaml)) to specific
website endpoints. There is no check if the id exists; this is left to the web
page handling itself.

* <https://progenetix.org/services/ids/pgxbs-kftva5zv>
* <https://progenetix.org/services/ids/PMID:28966033>
* <https://progenetix.org/services/ids/NCIT:C3262>
* <https://progenetix.org/services/ids/cellosaurus:CVCL_0022>
* <https://progenetix.org/services/ids/pgx:icdom-81703>

The `pgx` prefix has been registered with [identifiers.org](http://identifiers.org)
and the service can also be used to access identifiers at Progenetix.

* <https://identifiers.org/pgx:pgxbs-kftva5zv>

